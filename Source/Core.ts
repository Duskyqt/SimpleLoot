import { Looting } from "./Processes/Looting";

// Content //

export namespace Core {
    const CoreFrame = CreateFrame("Frame");
    const Running = true;
    CoreFrame.SetScript("OnUpdate", () => {

        const LootableUnits = Looting.GetLootableUnits();
        if (Running && LootableUnits.length > 0) {

            Looting.LootUnits(LootableUnits);
        }

    });
}