import { Inventory } from "./Inventory";
import { Movement } from "./Movement";
import { Units } from "./Units";

// Content //

export namespace Looting {
    /** Assign a throttle to the loot time to check later */
    export let LootUnit = "";
    export let LootTime = GetTime();
    export let LastLootAttempt = 0;
    /** Find the lootable units */
    export function GetLootableUnits(): string[] {
        const LootableUnits = Units.GetUnits(60, (unit: string) => {
            if (Lb.UnitIsLootable(unit)) {
                return true;
            }
            return false;
        }, 5);
        return LootableUnits;
    }
    /** Loot the units we found */
    export function LootUnits(units: string[]): void {
        if (Inventory.BagSlotsAvailable() > 0) {
            if (units.length > 0 && LootTime < GetTime()) {
                units.sort( (a: string, b: string) => {
                    return Lb.GetDistance3D(a) < Lb.GetDistance3D(b) && -1 || 1;
                });
                for (let i = 0; i < units.length; i++) {
                    const ThisUnit = units[i];
                    Movement.MoveTo(ThisUnit);
                    LootUnit = ThisUnit;
                    LootTime = GetTime() + (Lb.GetDistance3D(ThisUnit) / GetUnitSpeed("player")[1]) + 1;
                }
            }
            if (LootUnit != "") {
                if (LootTime > GetTime() && LastLootAttempt < GetTime() && Lb.GetDistance3D(LootUnit) < 5) {
                    Movement.MoveTo("player");
                    UnlockedInteract(LootUnit);
                }
            }
        }
    }
    export function LootItemsAvailable(): number {
        const Items = GetNumLootItems();
        let AvailableItems = 0;
        if (Items > 0) {
            for (let i = 0; i < Items; i++) {
                const ItemName = GetLootSlotInfo(i)[1];
                const Locked = GetLootSlotInfo(i)[4];
                if (ItemName && !Locked) {
                    AvailableItems++;
                }
            }
        }
        return AvailableItems;
    }

    const LootFrame = CreateFrame("Frame");
    LootFrame.RegisterEvent("LOOT_OPENED");
    LootFrame.RegisterEvent("LOOT_CLOSED");
    LootFrame.SetScript("OnEvent", (event: string, args: any) => {
        if (event == "LOOT_OPENED") {
            LastLootAttempt = GetTime() + 1;
        }
        if (event == "LOOT_CLOSED") {
            LastLootAttempt = 0;
            LootTime = GetTime();
        }
    });
}