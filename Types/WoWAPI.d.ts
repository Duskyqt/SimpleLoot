/* tslint:disable:interface-name class-name ban-types*/
//#region System/Misc API
declare const _G: any;
declare const BATTLE_PET_NAME_5: string;
declare const ERR_ATTACK_DEAD: string;
declare const PETTAME_NOTDEAD: string;
declare const PETTAME_DEAD: string;
declare const SPELL_FAILED_NO_PET: string;
declare const WorldFrame: any;
declare const UIParent: CreatedFrame;
declare const MailFrame: CreatedFrame;
declare const WorldMapFrame: CreatedWorldFrame;
declare class CreatedWorldFrame extends CreatedFrame {
    GetMapID(): number;
    /** @tupleReturn */
    GetNormalizedCursorPosition(): [number, number];
}
declare class Vector2DMixin {
    x: number;
    y: number;
    /** @tupleReturn */
    public GetXY(): [number, number];
}
declare interface IMapInfo {
    mapType: number;
    mapID: number;
    name: string;
    parentMapID: number;
}
declare function CreateVector2D(this: void, x: number, y: number): Vector2DMixin;
declare namespace C_Map {
    export function GetBestMapForUnit(this: void, UnitId: string): number;
    export function GetMapInfo(this: void, MapId: number): IMapInfo;
    export function GetPlayerMapPosition(this: void, MapId: number, UnitId: string): Vector2DMixin;
    /** @tupleReturn */
    export function GetWorldPosFromMapPos(this: void, MapId: number, Position: Vector2DMixin): any;
}
/** https://wow.gamepedia.com/API_BookTypeSpell  */
declare const BookTypeSpell: number;

// We have to keep these interfaces here because they make the bridge between wow and our API
declare class ICreatureId extends Number {}
declare interface IGuid extends String {}
declare interface IUnitId extends IGuid {}
declare class ISpecId extends Number {}
declare class ISpellId extends Number {}
declare interface INameToFunction {
    [Name: string]: Function;
}
declare interface INameToFunctions {
    [Name: string]: [Function];
}


declare function loadstring(this: void, execString: string): Function;
declare function assert(this: void, loadedString: Function): Function;

declare namespace Enum {
    namespace PowerType {
        const Alternate: number;
        const ArcaneCharges: number;
        const Chi: number;
        const ComboPoints: number;
        const Energy: number;
        const Focus: number;
        const Fury: number;
        const Insanity: number;
        const Happiness: number;
        const HolyPower: number;
        const LunarPower: number;
        const Maelstrom: number;
        const Mana: number;
        const Obselete: number;
        const Obselete2: number;
        const Pain: number;
        const Rage: number;
        const Runes: number;
        const RunicPower: number;
        const SoulShards: number;
    }
}

declare function GetCVar(this: void, Name: string): string;
declare function SetCVar(this: void, Name: string, Value: any): void;
/** https://wow.gamepedia.com/API_TargetNearestEnemy */
declare function TargetNearestEnemy(this: void): void;
/** https://wow.gamepedia.com/API_ClearTarget */
declare function ClearTarget(this: void): void;
/** https://wow.gamepedia.com/API_CombatLogGetCurrentEventInfo
 * @tupleReturn
 */
declare function CombatLogGetCurrentEventInfo(this: void): any[];
declare namespace C_ChallengeMode {
    /**
     * Get the Active Keystone Information
     * @return 0 [number] The Active Keystone Level
     * @return 1 [number[]] The active affixes in an array
     * @return 2 [boolean] WasActiveKeystoneCharged (No idea what this does, maybe its for the Tourney Realm)
     * @tupleReturn
     */
    function GetActiveKeystoneInfo(this: void): [number, number[], boolean]
}
/** https://wow.gamepedia.com/API_C_MountJournal */
declare namespace C_MountJournal {
    /** Summon mount by Index (0 for random favorite) */
    function SummonByID(this: void, index: number): void;
}
declare namespace C_Spell {
    /** Get wether a spell exists by it's Id */
    function DoesSpellExist(this: void, SpellId: number): boolean;
}
/** https://wow.gamepedia.com/API_C_Timer  */
declare namespace C_Timer {
    /** https://wow.gamepedia.com/API_C_Timer.After */
    function After(this: void, Duration: number, Function: Function): void;

    /** https://wow.gamepedia.com/API_C_Timer.NewTicker */
    function NewTicker(this: void, Duration: number, Function: Function, Iterations?: number): void;
}

/** https://wow.gamepedia.com/API_debugstack */
declare function debugstack(this: void, Coroutine?: number, start?: number, count1?: number, count2?: number ): string;
/** https://wow.gamepedia.com/API_Dismount */
declare function Dismount(this: void): void;
/** Get Cursor Position in the client
 * @tupleReturn
 */
declare function GetCursorPosition(this: void): [number, number];
/** @tupleReturn */
declare function GetGossipOptions(this: void): string[];
/** @tupleReturn */
declare function GetLatestThreeSenders(this: void): [string | undefined, string | undefined, string | undefined ];
/** @tupleReturn */
declare function GetInboxNumItems(this: void): [number, number];
declare function GetLocale(this: void): string;
declare function GetNumGossipOptions(this: void): number;
declare function SelectGossipOption(this: void, Index: number): void;
/** Get the current number of player in the plaayer's group */
declare function GetNumGroupMembers(this: void): number;
/**
 * 
 * @param index The index of the item in the loot window
 * @return 0 [string] The texture string of the item
 * @return 1 [string] The name of the item
 * @return 2 [number] The quantity of the item
 * @return 3 [number] The rarity of the item
 * @return 4 [boolean] Whether you are eligible to loot the item or not
 * @return 5 [boolean] Is the item a quest item
 * @return 6 [number] The quest ID of the item if [5] is true
 * @return 7 [boolean] IsActive // unknown
 * @tupleReturn
 */

declare function GetLootSlotInfo(this: void, index: number): [string, string, number, number, boolean, boolean, number, boolean];

/** Number of Items that can be looted (This is always the index of the last item) */
declare function GetNumLootItems(this: void): number;
/** https://wowwiki.fandom.com/wiki/API_GetNumSkillLines */
declare function GetNumSkillLines(this: void): number;
/** https://wowwiki.fandom.com/wiki/API_GetSkillLineInfo 
 * @tupleReturn
*/
declare function GetSkillLineInfo(this: void, Index: number): [string, number | undefined, number | undefined, number, number, number, number, number | undefined, number | undefined, number | undefined, number, number, string];
/** https://wow.gamepedia.com/API_GetTime */
declare function GetTime(this: void): number;
/** https://wow.gamepedia.com/API_MouselookStart */
declare function MouselookStart(this: void): void;
/** https://wow.gamepedia.com/API_IsIndoors */
declare function IsIndoors(this: void): boolean;
/** https://wow.gamepedia.com/API_IsOutdoors */
declare function IsOutdoors(this: void): boolean;
/** https://wow.gamepedia.com/API_IsMouselooking */
declare function IsMouselooking(this: void): boolean;
/** https://wow.gamepedia.com/API_print */
declare function print(this: void, ...args: any[]): void;
/** Trim a string (lua based) */
declare function trim(this: void, string: string): string;
/** Reloads the UI */
declare function ReloadUI(this: void): void;
/** https://wow.gamepedia.com/API_ResetInstances */
declare function ResetInstances(this: void): void;
/** https://wow.gamepedia.com/API_RunMacroText */
declare function RunMacroText(this: void, MacroText: string): void;
/** https://wow.gamepedia.com/API_TargetUnit */
declare function TargetUnit(this: void, UnitId: IUnitId): void;
declare function mod(this: void, a: number, b: number): number;
declare function tonumber(this: void, String: string): number;
declare function tremove(this: void, table: CreatedFrame[]): CreatedFrame;
declare function tinsert(this: void, table: CreatedFrame[], newValue: CreatedFrame): void;
declare namespace math {
    export function cos(this: void, value: number): number;
    export function rad(this: void, value: number): number;
    export function sin(this: void, value: number): number;
}
//#region Flight Paths


/** http://wowprogramming.com/docs/api/CloseTaxiMap.html */
declare function CloseTaxiMap(this: void): void;
/** http://wowprogramming.com/docs/api/NumTaxiNodes.html */
declare function NumTaxiNodes(this: void): number;
/** http://wowprogramming.com/docs/api/TaxiNodeCost.html */
declare function TaxiNodeCost(this: void, index: number): number;
/** http://wowprogramming.com/docs/api/TakeTaxiNode.html */
declare function TakeTaxiNode(this: void, index: number): void;
/** http://wowprogramming.com/docs/api/TaxiNodeGetType.html */
declare function TaxiNodeGetType(this: void, index: number): string;
/** http://wowprogramming.com/docs/api/TaxiNodeName.html */
declare function TaxiNodeName(this: void, index: number): string;
/** http://wowprogramming.com/docs/api/TaxiNodePosition.html 
 * @tupleReturn
 */
declare function TaxiNodePosition(this: void, index: number): [number, number];
/** https://wow.gamepedia.com/API_UnitOnTaxi */
declare function UnitOnTaxi(this: void, UnitId: IUnitId): boolean;

//#endregion
/**
 * Get current bandwidth information.
 * https://wow.gamepedia.com/API_GetNetStats
 *
 * @return 0 [number] Incoming bandwidth
 * @return 1 [number] Outgoing bandwidth
 * @return 2 [number] Home latency
 * @return 3 [number] World latency
 * @tupleReturn
 */
declare function GetNetStats(this: void): [number, number, number, number];

/**
 *
 * https://wow.gamepedia.com/API_GetInstanceInfo
 *
 * @return 0 [string] The name of the Instance
 * @return 1 [string] The Instance Type
 * @return 2 [number] The Difficulty ID
 * @return 3 [string] The Defficulty Name
 * @return 4 [number] Maximum Allowed Players
 * @return 5 [number] Dynamic Difficulty
 * @return 6 [boolean] IsDynamic Difficulty
 * @return 7 [number] Instance ID
 * @return 8 [number] Instance Group Size
 * @return 9 [number] LFG Dungeon Identifieras
 * @tupleReturn
 */
declare function GetInstanceInfo(this: void): [string, string, number, string, number, number, boolean, number, number];
/** https://wow.gamepedia.com/API_GetNumSpellTabs */
declare function GetNumSpellTabs(this: void): number;
declare interface ITaskPoi {
    questId: number;
    x: number;
    y: number;
    inProgress: boolean;
    numObjectives: number;
    mapID: number;
    isQuestStart: boolean;
    isDaily: boolean;
    isCombatAllyQuest: boolean;
    childDepth: number | undefined;
}

declare namespace C_TaskQuest {
    /** https://wow.gamepedia.com/C_TaskQuest.GetQuestInfoByQuestID
     * @param questId [number] The quest Identifier
     * @return 0 [string] Quest Title
     * @return 1 [number | undefined] Faction Identifier
     * @return 2 [boolean | undefined] Capped (not sure what this refers to)
     */
    export function GetQuestInfoByQuestID(this: void, questId: number): [string, number | undefined, boolean | undefined];
    /**
     * 
     * @param MapId [number] MapId to check.
     * @return TaskPOI [object] Table of TaskPOI objects
     */
    export function GetQuestsForPlayerByMapID(this: void, MapId: number): ITaskPoi[];
}
/**
 * @param Index [number] The quest's index
 * @return 0 [number] Number of Total Entires incl collapsible entries
 * @return 1 [number] Number of active quests
 * @tupleReturn
 */
declare function GetNumQuestLogEntries(this: void): [number, number];

/**
 * @param Index [number] The quest's index
 * @return [number] The Quest ID
 */
declare function GetQuestIDFromLogIndex(this: void, Index: number): number;

/**
 * 
 * @param index questLogID Integer - The index of the quest you wish to get information about, between 1 and GetNumQuestLogEntries()'s first return value. (This is not the ID as used in QuestStrings.)
 * @return 0 [string] String - The title of the quest, or nil if the index is out of range.
 * @return 1 [number] Integer - The level of the quest
 * @return 2 [number] Integer - if questTag is GROUP, the positive number of players suggested for the quest or nil (added in 2.0.3)
 * @return 3 [boolean] Boolean - 1 if the entry is not a quest, but a header, eg. "Mulgore" nil otherwise.
 * @return 4 [boolean] Boolean - 1 if the entry is a collapsed header, nil otherwise.
 * @return 5 [number] Integer - -1 if quest is (FAILED), +1 if quest is (COMPLETED), nil otherwise.
 * @return 6 [number] 
 * @return 7 [boolean]Integer - The quest identification number. This is the number found in GetQuestsCompleted() after it has been completed. It is also the number used to identify quests on sites such as Wowhead.com (Example: Rest and Relaxation) (added in 3.3.0)
 * @return 8 [boolean]
 * @return 9 [boolean] 
 * @return 10 [boolean] 
 * @return 11 [boolean]
 * @return 12 [boolean]
 * @return 13 [boolean]
 * @return 14 [boolean]
 * @return 15 [boolean]
 * @tupleReturn 
 */
declare function GetQuestLogTitle(this: void, index: number): [string, number, number, boolean, boolean, number, number, boolean,  boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean,];

/** Get wether the player actual;ly ahs a gree reticle used for groundcasting */
declare function SpellIsTargeting(this: void): boolean;
/**
 * @param Index [number] The quest's index
 * @return 0 [string] The Description
 * @return 1 [string] The Objective
 * @tupleReturn
 */
declare function GetQuestLogQuestText(this: void, Index: number): [string, string];
/** https://wow.gamepedia.com/API_GetMirrorTimerProgress  */
declare function GetMirrorTimerProgress(this: void, identifier: string): number;
/** https://wow.gamepedia.com/API_CameraOrSelectOrMoveStart */
declare function CameraOrSelectOrMoveStart(this: void): void;
/** https://wow.gamepedia.com/API_CameraOrSelectOrMoveStop */
declare function CameraOrSelectOrMoveStop(this: void): void;
/** https://wow.gamepedia.com/API_AscendStop */
declare function AscendStop(this: void): void;
/** https://wow.gamepedia.com/API_DescendStop */
declare function DescendStop(this: void): void;
/** https://wow.gamepedia.com/API_JumpOrAscendStart */
declare function JumpOrAscendStart(this: void): void;
/** https://wow.gamepedia.com/API_JumpOrAscendStop */
declare function JumpOrAscendStop(this: void): void;
/** https://wow.gamepedia.com/API_SitStandOrDescendStart */
declare function SitStandOrDescendStart(this: void): void;
/** https://wow.gamepedia.com/API_SitStandOrDescendStop */
declare function SitStandOrDescendStop(this: void): void;
/** https://wow.gamepedia.com/API_StrafeLeftStart */
declare function StrafeLeftStart(this: void): void;
/** https://wow.gamepedia.com/API_StrafeLeftStop */
declare function StrafeLeftStop(this: void): void;
/** https://wow.gamepedia.com/API_StrafeRightStart */
declare function StrafeRightStart(this: void): void;
/** https://wow.gamepedia.com/API_StrafeRightStop */
declare function StrafeRightStop(this: void): void;
/** https://wow.gamepedia.com/API_TurnLeftStart */
declare function TurnLeftStart(this: void, startTime: number): void;
/** https://wow.gamepedia.com/API_TurnLeftStop */
declare function TurnLeftStop(this: void, stopTime: number): void;
/** https://wow.gamepedia.com/API_TurnRightStart */
declare function TurnRightStart(this: void, startTime: number): void;
/** https://wow.gamepedia.com/API_TurnRightStop */
declare function TurnRightStop(this: void, stopTime: number): void;
/** https://wow.gamepedia.com/API_MoveBackwardStart */
declare function MoveBackwardStart(this: void): void;
/** https://wow.gamepedia.com/API_MoveBackwardStop */
declare function MoveBackwardStop(this: void): void;
/** https://wow.gamepedia.com/API_MoveForwardStart */
declare function MoveForwardStart(this: void): void;
/** https://wow.gamepedia.com/API_MoveForwardStop */
declare function MoveForwardStop(this: void): void;
/** https://wow.gamepedia.com/API_PitchUpStart */
declare function PitchUpStart(this: void): void;
/** https://wow.gamepedia.com/API_PitchDownStop */
declare function PitchDownStop(this: void): void;
/** https://wow.gamepedia.com/API_PitchDownStart */
declare function PitchDownStart(this: void): void;
/** https://wow.gamepedia.com/API_PitchUpStop */
declare function PitchUpStop(this: void): void;


/** http://wowprogramming.com/docs/api/IsAutoRepeatSpell.html */
declare function IsAutoRepeatSpell(this: void, SpellName: number | string): boolean;

declare function IsModifierKeyDown(this: void): boolean;
declare function IsAltKeyDown(this: void): boolean;
declare function IsControlKeyDown(this: void): boolean;
declare function IsShiftKeyDown(this: void): boolean;
declare function IsLeftShiftKeyDown(this: void): boolean;
declare function IsLeftAltKeyDown(this: void): boolean;
declare function IsLeftControlKeyDown(this: void): boolean;
declare function IsRightShiftKeyDown(this: void): boolean;
declare function IsRightAltKeyDown(this: void): boolean;
declare function IsRightControlKeyDown(this: void): boolean;

//#endregion

//#region Item API
declare namespace C_Item {
    /**
     * Get whether or not an item exists in a specific equipment slot.
     * https://wow.gamepedia.com/API_C_Item.DoesItemExist
     * @param ItemLocation [CreatedEquipmentSlot] - The virtual equipment slot.
     * @return [boolean] - Whether or not the item exists
     */
    function DoesItemExist(this: void, ItemLocation: CreatedEquipmentSlot): boolean;
    /**
     * Get the Item ID an equipment slot.
     * https://wow.gamepedia.com/API_C_Item.GetItemID
     * @param ItemLocation [CreatedEquipmentSlot] - The virtual equipment slot.
     * @return [number] - Item ID
     */
    function GetItemID(this: void, ItemLocation: CreatedEquipmentSlot): number;
}

declare namespace C_AzeriteEmpoweredItem {
    function GetPowerInfo(this: void, Index: number): GetPowerInfoResult | undefined;
    function IsAzeriteEmpoweredItem(this: void, ItemLoc: CreatedEquipmentSlot): boolean;
    function IsPowerSelected(this: void, ItemLoc: CreatedEquipmentSlot, AzeriteId: number): boolean;
}

interface GetPowerInfoResult {
    azeritePowerID: number;
    spellID: number;
}

declare class CreatedEquipmentSlot {
    public Clear: Function;
    public IsEquipmentSlot: Function;
    public IsEqualToBagAndSlot: Function;
    public GetEquipmentSlot: Function;
    public equipmentSlotIndex: number;
    public SetBagAndSlot: Function;
    public IsBagAndSlot: Function;
    public SetEquipmentSlot: Function;
    public IsEqualToEquipmentSlot: Function;
    public GetBagAndSlot: Function;
    public IsEqualTo: Function;

    constructor(SlotId: number)

    public HasAnyLocation(this: void): boolean;
}

declare class ItemLocationType {
    public CreateFromEquipmentSlot(SlotId: number): CreatedEquipmentSlot;
}

declare class ItemLocation {
    public CreateFromEquipmentSlot(SlotId: number): CreatedEquipmentSlot;
}

/**
 *
 * @export
 * @param {number} ItemId - the identifier of the item we want to equip.
 * @param {string} ItemName - the name of the item we want to equip
 */
declare function EquipItemByName(this: void, ItemId?: number, ItemName?: string): void;
/** icon, itemCount, locked, quality, readable, lootable, itemLink, isFiltered, noValue, itemID = GetContainerItemInfo(bagID, slot)
 *
 * @export
 * @param {number} BagId
 * @param {number} SlotId
 * @returns {[number, number, boolean, number, boolean, boolean, string, boolean, boolean, number]}
 * @tupleReturn
 */
declare function GetContainerItemInfo(this: void, BagId: number, SlotId: number): [number, number, boolean, number, boolean, boolean, string, boolean, boolean, number];
/** https://wow.gamepedia.com/API_GetContainerNumSlots */
declare function GetContainerNumSlots(this: void, BagNumber: number): number;
/**
 * Get Number of Free Container Slots
 * https://wow.gamepedia.com/API_GetContainerNumFreeSlots
 *
 * @param Slot [number] Bag Identifier
 * @return 0 [number] Number of Empty Bag Slots
 * @return 1 [number] Type of Bag
 * @tupleReturn
 */
declare function GetContainerNumFreeSlots(this: void, Slot: number): [number, number];

/**
 * Get the Enchant Info of your Weapons
 * @return 0 [boolean] - Is Mainhand enchanted.
 * @return 1 [number] - OffHand Expiration Timer in milliseconds.
 * @return 2 [number] - Charges on MainHand Enchant.
 * @return 3 [number] - Mainhand Enchant id.
 * @return 4 [boolean] - Is OffHand enchanted.
 * @return 5 [number] - OffHand Expiration Timer in milliseconds.
 * @return 6 [number] - Charges on MainHand Enchant.
 * @return 7 [number] - Mainhand Enchant id.
 * @tupleReturn
 */
declare function GetWeaponEnchantInfo(this: void): [boolean, number, number, number, boolean, number, number, number];
/**
 * Get Cooldown of Item
 * https://wow.gamepedia.com/API_GetItemCooldown
 *
 * @param ItemId [number] This Item's Identifier
 * @return 0 [number] Starting Time (GetTime())
 * @return 1 [number] Total duration of the cooldown
 * @return 2 [number] Whether or not the item is ready (1 for Ready, 0 for Not ready)
 * @tupleReturn
 */
declare function GetItemCooldown(this: void, ItemId: number): [number, number, number];
/**
 *
 * https://wow.gamepedia.com/API_GetInventoryItemCooldown
 * @param UnitId [string] The unit's Identifier to be queried
 * @param SlotId [number] The inventory slot to be queried
 * @return 0 [number] Starting Time (GetTime())
 * @return 1 [number] Total duration of the cooldown
 * @return 2 [number] Whether or not the item is ready (1 for Ready, 0 for Not ready)
 * @tupleReturn
 */
declare function GetInventoryItemCooldown(this: void, UnitId: string, SlotId: number): [number, number, number];
/**
 * Get the Item Id for a specific inventory slot.
 * https://wow.gamepedia.com/API_GetInventoryItemID
 *
 * @param UnitId [string] The unit's Identifier to be queried
 * @param SlotId [number] The inventory slot to be queried
 * @returns [number] Unique Item Identifier
 */
declare function GetInventoryItemID(this: void, UnitId: string, SlotId: number): number;
/**
 * Get the Invetory Slot Information
 *
 * @param Slot [string] The InventorySlotName to be queried
 * @return 0 [number] The Slot Identifier of the Item
 * @return 1 [string] The Texture path
 * @tupleReturn
 */
declare function GetInventorySlotInfo(this: void, Slot: string): [number, string];
/** https://wow.gamepedia.com/API_GetItemCount */
declare function GetItemCount(this: void, ItemId: number, IncludeBank?: boolean, IncludeCharges?: boolean): number;
/**
 * Get the specific information about an item
 * https://wow.gamepedia.com/API_GetItemInfo
 * @return 0 [string] - Item Name
 * @return 1 [string] - Item Link
 * @return 2 [number] - Item Rarity
 * @return 3 [number] - Item Level
 * @return 4 [number] - Minimum Item level
 * @return 5 [string] - Item Type
 * @return 6 [string] - Item Subtype
 * @return 7 [number] - Item Stack Count
 * @return 8 [string] - Item Equipment Loc
 * @return 9 [number] - Item Icon
 * @return 10 [number] - Item Sell Price
 * @return 11 [number] - Item Class ID
 * @return 12 [number] - Item Subclass ID
 * @return 13 [number] - Bind Type
 * @return 14 [number] - Expansion ID
 * @return 15 [number] - Item Set ID
 * @return 16 [boolean] - Is Crafting Reagent
 * @tupleReturn
 */
declare function GetItemInfo(this: void, Item: any): [string, string, number, number, number, string, string, number, string, number, number, number, number, number, number, number, boolean];

/**
 * Get the specific information about an item
 * https://wow.gamepedia.com/API_GetItemGem
 * @return 0 [string] - Item Name
 * @return 1 [string] - Item Link
 * @tupleReturn
 */
declare function GetItemGem(this: void, Item: any, Index: number): [string, string]

/** https://wow.gamepedia.com/API_PickupContainerItem */
declare function PickupContainerItem(this: void, BagId ?: number, SlotId ?: number): void;
/** https://wow.gamepedia.com/API_PickupMerchantItem */
declare function PickupMerchantItem(this: void, BagId ?: number, SlotId ?: number): void;

/** https://wow.gamepedia.com/API_UseInventoryItem */
declare function UseInventoryItem(this: void, SlotId: number): void;
/** https://wow.gamepedia.com/API_UseItemByName */
declare function UseItemByName(this: void, ItemName: string, Unit ?: IUnitId): void;
//#endregion

//#region Frame API

/** Frame API */


declare interface IColor { R: number; G: number; B: number; A: number; Hex: IHexColor; }
declare interface IHexColor extends String {}
declare interface IPath extends String {}
declare interface IPoint { Anchor: string; X: number; Y: number; }
declare interface IPowerType extends Number {}
declare interface ISize { Height: number; Width: number; }

declare interface CreatedScrollableTextArea extends CreatedScrollFrame {
    Children: CreatedTextArea;
}

declare interface CreatedScrollFrame extends CreatedFrame {
    GetVerticalScroll(): number;
    GetVerticalScrollRange(): number;
    SetScrollChild(child: CreatedFrame): void;
    SetVerticalScroll(range: number): number;
}

declare interface CreatedTextArea extends CreatedTextField {

}

declare interface CreatedTextField extends CreatedFrame {
    First: boolean;
    MaxChar?: number;
    Tooltip: string;
    TooltipAnchor?: CreatedFrame;
    Set(this: void, Value: number): void;
}

/** A frame that acts as a button with text on it */
declare interface CreatedButton extends CreatedFrame {
    First: boolean;
    OnClick?: Function;
    Click(this: void): void;
    SetEnabled(this: void, Enabled: boolean): void;
    Set(this: void, Value: number): void;
}

/** A frame that can be clicked to display a menu */
declare interface CreatedDropDown extends CreatedFrame {
    /** The currently selected value */
    Current: string;
    /** The frame that pops up when the user click the dropdown */
    DropDownFrame: CreatedDropDownFrame;
    /** Wether the frame is meant to appear first or second (soon to be changed) */
    First: boolean;
    /** The options that were passed when we created the dropdown */
    Options: string[];
    /** The FontString that display the currently selected value */
    TitleFontString: FontString;
    /** Event called when the user clicks */
    OnClick?: Function;
    /** Event called when the user clicks */
    OnMouseWheel?: Function;
    /** Event called when the user select an element in the dropdown frame */
    OnSelected?: Function;
    /** Perform click event */
    Click(this: void): void;
    /** Disable or enable the control */
    SetEnabled(this: void, Enabled: boolean): void;
    /** Set the current value of this control */
    Set(this: void, Value: string): void;
}


declare interface CreatedNumericField extends CreatedFrame {
    AfterChanged?: Function;
    First: boolean;
    Max: number;
    Min: number;
    Step: number;
    Value: number;
    Set(this: void, Value: number): void;
}
declare interface CreatedCheckbox extends CreatedFrame {
    AfterClicked?: Function;
    Checked: boolean;
    Set(this: void, Enabled: boolean): void;
}

declare interface CreatedIconFrame extends CreatedFrame {
    SetNormalTexture(iconIdOrPath: number | string): void;
    SetPushedTexture(iconIdOrPath: number | string): void;
    SetHighlightTexture(iconIdOrPath: number | string): void;
}

declare interface ChildrenFrames {
    Check: CreatedCheckbox;
    Title: FontString;
    Value: CreatedNumericField;
    Value2: CreatedNumericField;
    Select: CreatedDropDown;
    Select2: CreatedDropDown;
}
declare interface CreatedRow extends CreatedFrame {
    Childs: ChildrenFrames;
}
declare interface IBackdrop {
    bgFile?: IPath;
    edgeFile?: IPath;
    edgeSize: number;
    tile: boolean;
    tileSize: number;
}

declare class CreatedDropDownFrame extends CreatedFrame {
    public CloseDropDowns: Function;
    public DropDownFrameChilds: CreatedFrame[];
}
/** https://wow.gamepedia.com/API_CreateFrame */
declare function CreateFrame(this: void, FrameType: string, Name ?: string, UIParent ?: CreatedFrame, Template ?: string): CreatedFrame;

declare class CreatedLine extends CreatedFrame {
    public SetColorTexture(r: number, g: number, b: number, a: number): void;
    public SetDrawLayer(layer: string): void;
    public SetEndPoint(point: string): void;
    public SetStartPoint(point: string): void;
    public SetThickness(thickness: number): void;
}

declare class CreatedFrame {
    public Enabled: boolean;
    public Draggable: boolean;
    public DropDownFrame: CreatedDropDownFrame;
    public General: boolean;
    public GetPosition: Function;
    public Global: boolean;
    public IsMain: boolean;
    public IsMoving: boolean;
    public Identifier: string;
    public Line: CreatedLine;
    public Name: string;
    public NoTooltip: boolean;
    public PageId: number;
    public Parent: CreatedFrame;
    public Padding: number;
    public Point: IPoint;
    public RowIndex: number;
    public Size: ISize;
    public Title: FontString;
    public Toggle: Function;
    public TooltipAnchor?: CreatedFrame;
    public Tooltip: string | undefined;
    public Update?: Function;
    public WindowParent: () => CreatedFrame;

    public AddFontStrings(FontString1: FontString, FontString2?: FontString, FontString3?: FontString, FontString4?: FontString): void;
    public AddSpellByID(SpellId: ISpellId): void;
    public ClearFocus(): void;
    public ClearLines(): void;
    public CreateFontString(Region: string, Parent?: string, Template?: string): FontString;
    public CreateLine(): CreatedLine;
    public Disable(): void;
    public Enable(): void;
    public EnableMouse(Enable: boolean): void;
    public GetEffectiveScale(): number;
    public GetFrameLevel(): number;
    public GetHeight(): number;
    /** @tupleReturn */
    public GetPoint(): [string, CreatedFrame, string, number, number];
    /** @tupleReturn */
    public GetRegions(): [any, any, any, any, any, any, any, any, any];
    public GetScale(): number;
    public GetText(): string;
    public GetWidth(): number;
    public Hide(): void;
    public ClearAllPoints(): void;
    public SetAutoFocus(Enabled: boolean): void;
    public SetBackdrop(Backdrop: IBackdrop): void;
    public SetBackdropBorderColor(R: number, G: number, B: number, A: number): void;
    public SetBackdropColor(R: number, G: number, B: number, A: number): void;
    public SetBackground(this: void, Color: IColor, BorderColor: IColor): void;
    public ForceHide(): void;
    public ForceShow(): void;
    /** @tupleReturn */
    public GetCenter(): [number, number];
    public GetParent(): CreatedFrame | undefined;
    public GetStringWidth(): number;
    public SetClampedToScreen(Enable: boolean): void;
    public SetFocus(): void; 
    public SetFont(FontName: string, TextSize?: number, Params?: string): void;
    public SetFrameLevel(Level: number): void;
    /** https://wow.gamepedia.com/FrameStrata */
    public SetFrameStrata(Strata: string): void;
    public SetHeight(Height: number): void;
    public SetIntendedWordWrap(Enabled: boolean): void;
    public SetMaxLetters(Amount: number): void;
    public SetJustifyH(Align: string): void;
    public SetMovable(Enable: boolean): void;
    public SetMultiLine(Enabled: boolean): void;
    public SetNumeric(Enabled: boolean): void;
    public SetParent(Parent: CreatedFrame | undefined): void;
    public SetPoint(Point: string, RelativeTo: CreatedFrame, RelativePoint: string, X: number, Y: number): void;
    public SetOwner(WorldFrame: any, Anchor: string): void;
    public SetScale(Scale: number): void;
    public SetSize(Width: number, Height: number): void;
    public SetScript(Method: string, Callback: Function): void;
    public SetAllPoints(): void;
    public SetText(Text: string): void;
    public SetTextColor(r: number, g: number, b: number, a: number): void;
    public SetTextInsets(l: number, r: number, t: number, b: number): void;
    public SetUnitAura(UnitId: IUnitId, Index: number, Filter?: string): void;
    public Show(): void;
    public StartMoving(): void;
    public StopMovingOrSizing(): void;
    public IsVisible(): boolean;
    public RegisterEvent(EventType: string): void;
}
declare class FontString extends CreatedFrame {
}

declare class GameTooltipFrame {
    public AddLine(Message: string): void;
    public ClearLines(): void;
    public Hide(): void;
    public SetBackdrop(Backdrop: IBackdrop): void;
    public SetBackdropColor(R: number, G: number, B: number, A: number): void;
    public SetHyperlink(HyperLink: HyperLink): void;
    public SetOwner(Frame: CreatedFrame, Anchor: string, X?: number, Y?: number): void;
    public SetPoint(Point: string, RelativeTo: CreatedFrame, RelativePoint: string, X: number, Y: number): void;
    public SetText(Text: string, R: number | undefined, G: number | undefined, B: number | undefined, Alpha: number, Unknown: boolean): void;
    public Show(): void;
}
declare class TooltipTextLine {
    public GetObjectType(): string;
    public GetText(): string;
}


//#endregion

//#region Spell API

/** Spell API */
/** https://wow.gamepedia.com/API_CastSpellByName */
declare function CastSpellByName(this: void, Name: string, Unit ?: IUnitId): void;
declare function CastSpellByID(this: void, Id: number, Unit ?: IUnitId): void;
/** https://wow.gamepedia.com/API_GetRaidTargetIndex */
declare function GetRaidTargetIndex(this: void, Unit: IUnitId): number | undefined;
/**
 * Get Rune Duration
 * https://wow.gamepedia.com/API_GetRuneCooldown
 * @return 0 [number] Start Value in GetTime()
 * @return 1 [number] Duration of Rune Cooldown
 * @return 2 [boolean] Whtehr or not the Rune is ready
 * @tupleReturn
 */
declare function GetRuneCooldown(this: void, RuneId: number): [number, number, boolean];


/** https://wow.gamepedia.com/API_GetSpellBookItemName
 * @tupleReturn
 */
declare function GetSpellBookItemName(this: void, Index: number, BookTypeSpell: string): [string, string, number]; // TODO CHECK ARGS
/**
 * Get a spell's cooldown.
 * https://wow.gamepedia.com/API_GetSpellCooldown
 *
 * @param SpellId [number] The Spell's identifier
 * @return 0 [number] When the cooldown was started (from GetTime())
 * @return 1 [number] Current cooldown duration
 * @tupleReturn
 */
declare function GetSpellCooldown(this: void, SpellId: ISpellId | string): [number, number];
/** Get the Count of a Spell */
declare function GetSpellCount(this: void, SpellId: ISpellId): number;
/** Get the Spell's Description as seen in the tooltip */
declare function GetSpellDescription(this: void, SpellId: number): string;
/**
 * Get the spell's recharge values
 * https://wow.gamepedia.com/API_GetSpellCharges
 *
 * @param SpellId [number] The spell's id
 * @param 0 [number] CurrentCharges
 * @param 1 [number] MaxCharges
 * @param 2 [number] Start
 * @param 3 [number] Duration
 * @tupleReturn
 */
declare function GetSpellCharges(this: void, SpellId: ISpellId): [number, number, number, number];
/** Get information about the specified line of spells.
 * https://wow.gamepedia.com/API_GetSpellTabInfo
 *
 * @param Index [number] The index of the tab
 * @return 0 [string] Name
 * @return 1 [string] Icon
 * @return 2 [number] Spellbook Offset
 * @return 3 [number] Number of Entries
 * @return 4 [boolean] Guild Perk Bool
 * @return 5 [number] Offspec Identifier
 * @tupleReturn
 */
declare function GetSpellTabInfo(this: void, Index: number): [string, number, number, number, boolean, number, boolean];
/**
 * Get a Spell's informations from the WoW API
 * https://wow.gamepedia.com/API_GetSpellInfo
 *
 * @param SpellId [string|number] The spell's id or name
 * @return 0 [string] SpellName
 * @return 1 [???] Formerly Rank (Removed in 8.0, may be used in Classic!)
 * @return 2 [number] Icon
 * @return 3 [number] Casting Time (Milliseconds)
 * @return 4 [number] Minimum Range
 * @return 5 [number] Maximum Range
 * @return 6 [number] SpellId
 * @tupleReturn
 */
declare function GetSpellInfo(this: void, SpellId: ISpellId | string): [string, undefined, number, number, number, number, number];
declare interface HyperLink extends String {}
/** @tupleReturn */
declare function GetSpellLink(this: void, SpellId: number | string): [HyperLink, number];
/** http://wowprogramming.com/docs/api/GetTotemTimeLeft.html */
declare function GetTotemTimeLeft(this: void, totemSlot: number): number;
/** http://wowprogramming.com/docs/api/IsCurrentSpell.html */
declare function IsCurrentSpell(this: void, SpellId: number | string): boolean;
/** https://wow.gamepedia.com/API_IsPlayerSpell */
declare function IsPlayerSpell(this: void, SpellId: ISpellId): boolean;
/** https://wow.gamepedia.com/API_IsSpellInRange */
declare function IsSpellInRange(this: void, SpellName: string, UnitId: IUnitId): number;
/** https://wow.gamepedia.com/API_IsUsableSpell */
declare function IsUsableSpell(this: void, SpellId: ISpellId): boolean;
/** https://wow.gamepedia.com/API_SpellStopTargeting */
declare function SpellStopTargeting(this: void): void;
/** https://wow.gamepedia.com/API_SpellStopCasting */
declare function SpellStopCasting(this: void): void;

//#endregion

//#region Player API

/** https://wow.gamepedia.com/API_GetCombatRating */
declare function GetCombatRating(this: void, CombatRatingId: number): number;
/** https://wow.gamepedia.com/API_GetCorruption */
declare function GetCorruption(this: void): number;
/** https://wow.gamepedia.com/API_GetCorruptionResistance */
declare function GetCorruptionResistance(this: void): number;
/** https://wow.gamepedia.com/API_GetCritChance */
declare function GetCritChance(this: void): number;
/** https://wow.gamepedia.com/API_GetSpecialization */
declare function GetSpecialization(this: void): [1, 2, 3, 4];
/** https://wow.gamepedia.com/API_GetShapeshiftForm */
declare function GetShapeshiftForm(this: void): number;
/**
 * Get the player's specialization.
 * https://wow.gamepedia.com/API_GetSpecializationInfo
 *
 * @param Spec [number] The index of the player's specialization.
 * @return 0 [number] Identifier
 * @return 1 [string] Name
 * @return 2 [string] Description
 * @return 3 [number] Icon
 * @return 4 [string] Background
 * @return 5 [string] Role
 * @tupleReturn
 */
declare function GetSpecializationInfo(this: void, Spec: [1, 2, 3, 4]): [number, string, string, number, string, number];
/** https://wow.gamepedia.com/API_GetTotemTimeLeft */
declare function GetTotemTimeLeft(this: void, Index: number): number;
/** https://wow.gamepedia.com/API_IsFalling */
declare function IsFalling(this: void): boolean;
/** https://wow.gamepedia.com/API_IsFlying */
declare function IsFlying(this: void): boolean;
/** Get wether the player is in a Group */
declare function IsInGroup(this: void): boolean;
/** Get wether the player is in a Raid */
declare function IsInRaid(this: void): boolean;
/** https://wow.gamepedia.com/API_IsMounted */
declare function IsMounted(this: void): boolean;
/** https://wow.gamepedia.com/API_IsPetActive */
declare function IsPetActive(this: void): boolean;
/** https://wow.gamepedia.com/API_IsSwimming */
declare function IsSwimming(this: void): boolean;
/** https://wow.gamepedia.com/API_PetAttack */
declare function PetAttack(this: void, UnitId: IUnitId): void;
/** https://wow.gamepedia.com/API_PetAssistMode */
declare function PetAssistMode(this: void): void;
/** https://wow.gamepedia.com/API_PetPassiveMode */
declare function PetPassiveMode(this: void): void;
//#endregion

//#region Unit API

/**
 * Get current Power Regeneration
 * https://wow.gamepedia.com/API_GetPowerRegen
 * @return 0 [number] Focus Regeneration
 * @return 1 [number] ?
 * @tupleReturn
 */
declare function GetPowerRegen(this: void, UnitId: IUnitId): [number, number];

/** Get the specified unit's speed.
 * https://wow.gamepedia.com/API_GetUnitSpeed
 * @param UnitId [IUnitId] Identifier of the specified Unit
 * @return 0 [number] Current Speed
 * @return 1 [number] Running Speed
 * @return 2 [number] Flight Speed
 * @return 3 [number] Swimming Speed
 * @tupleReturn
 */
declare function GetUnitSpeed(this: void, UnitId: IUnitId): [number, number, number, number];

/** https://wow.gamepedia.com/API_UnitAffectingCombat */
declare function UnitAffectingCombat(this: void, UnitId: IUnitId): boolean;
/** https://wow.gamepedia.com/API_GetCombatRatingBonus */
declare function GetCombatRatingBonus(this: void, Identifier: number): number;
declare function GetVersatilityBonus(this: void, Identifier: number): number;
/** Get the specified unit's Attack Power
 * https://wow.gamepedia.com/API_UnitAttackPower
 *
 * @param UnitId [IUnitId] The UnitId to be queried
 * @return 0 [number] The base attack power
 * @return 1 [number] The number of positive buffs to attack power
 * @return 2 [number] The number pf negative buffs to attack power
 * @tupleReturn
 */
declare function UnitAttackPower(this: void, UnitId: IUnitId): [number, number, number];
/** Get the specified unit's Attack Speed
 * https://wow.gamepedia.com/API_UnitAttackSpeed
 *
 * @param UnitId [IUnitId] The UnitId to be queried
 * @return 0 [number] The Mainhand Attack Speed
 * @return 1 [number] The Offhand Attack speed
 *
 * @tupleReturn
 */
declare function UnitAttackSpeed(this: void, UnitId: IUnitId): [number, number | undefined];

/**
 *  Get the properties for the aura on a unit by it's index, and possibly with filters.
 *  https://wow.gamepedia.com/API_UnitAura
 *
 * @export
 * @param {UnitId} UnitId
 * @param {number} Index
 * @param {string} [Filter]
 * @returns 0 - Name
 * @returns 1 - IconId - number
 * @returns 2 - Count - number
 * @returns 3 - DebuffType - DebuffType
 * @returns 4 - Duration - number
 * @returns 5 - ExpirationTime - number
 * @returns 6 - UnitCaster - Guid
 * @returns 7 - CanStealOrPurge - boolean
 * @returns 8 - NameplateShowPersonal - boolean
 * @returns 9 - SpellId - number
 * @returns 10 - CanApplyAura - boolean
 * @returns 11 - IsBossDebuff - boolean
 * @returns 12 - IsCastByPlayer - boolean
 * @returns 13 - NameplateShowAll - boolean
 * @returns 14 - TimeMod - number
 * @tupleReturn
 */
declare function UnitAura(this: void, UnitId: IUnitId, Index: number, Filter ?: string): [string, number, number, string, number, number, string, boolean, boolean, number, boolean, boolean, boolean, boolean, number, number] | any;


/**
 * Get the specified unit's casting information.
 * ** CLASSIC **
 * https://wow.gamepedia.com/API_UnitCastingInfo
 * @param Unit [IUnitId] The Identifier for the specified unit.
 * @return 0 [string] Name
 * @return 1 [string] Text
 * @return 2 [string] Icon
 * @return 3 [number] Start Time in Milliseconds
 * @return 4 [number] End Time in Milliseconds
 * @return 5 [boolean] Is Tradeskill Bool
 * @return 6 [string] Cast Identifier
 * @return 7 [boolean] Not Interruptible Boolean
 * @return 8 [number] Spell Identifier
 * @tupleReturn
 */
declare function CastingInfo(this: void): [string, string, string, number, number, boolean, string, boolean, number];
/**
 * Get the specified unit's casting information.
 * ** CLASSIC **
 * https://wow.gamepedia.com/API_UnitChannelInfo
 * @param Unit [IUnitId] The Identifier for the specified unit.
 * @return 0 [string] Name
 * @return 1 [string] Text
 * @return 2 [string] Icon
 * @return 3 [number] Start Time in Milliseconds
 * @return 4 [number] End Time in Milliseconds
 * @return 5 [boolean] Is Tradeskill Bool
 * @return 6 [boolean] Not Interruptible Boolean
 * @return 7 [number] Spell Identifier
 * @tupleReturn
 */
declare function ChannelInfo(this: void): [string, string, string, number, number, boolean, boolean, number];

/** Get the specified unit's casting information.
 * ** BFA **
 * https://wow.gamepedia.com/API_UnitCastingInfo
 * @param Unit [IUnitId] The Identifier for the specified unit.
 * @return 0 [string] Name
 * @return 1 [string] Text
 * @return 2 [string] Icon
 * @return 3 [number] Start Time in Milliseconds
 * @return 4 [number] End Time in Milliseconds
 * @return 5 [boolean] Is Tradeskill Bool
 * @return 6 [string] Cast Identifier
 * @return 7 [boolean] Not Interruptible Boolean
 * @return 8 [number] Spell Identifier
 * @tupleReturn
 */
declare function UnitCastingInfo(this: void, Unit: IUnitId): [string, string, string, number, number, boolean, string, boolean, number];
/**
 * Get the specified unit's casting information.
 * ** BFA **
 * https://wow.gamepedia.com/API_UnitChannelInfo
 * @param Unit [IUnitId] The Identifier for the specified unit.
 * @return 0 [string] Name
 * @return 1 [string] Text
 * @return 2 [string] Icon
 * @return 3 [number] Start Time in Milliseconds
 * @return 4 [number] End Time in Milliseconds
 * @return 5 [boolean] Is Tradeskill Bool
 * @return 6 [boolean] Not Interruptible Boolean
 * @return 7 [number] Spell Identifier
 * @tupleReturn
 */
declare function UnitChannelInfo(this: void, Unit: IUnitId): [string, string, string, number, number, boolean, boolean, number];
/** https://wow.gamepedia.com/API_UnitCanAttack */
declare function UnitCanAttack(this: void, Unit: IUnitId, OtherUnit: IUnitId): boolean;
/**
 * Get the Unit's Class.
 * https://wow.gamepedia.com/API_UnitClass.
 *
 * @param UnitId [IUnitId] The Unit's ID
 * @returns 0 [string] Localised Name
 * @returns 1 [string] Enum Name
 * @returns 2 [number] Class Id
 * @tupleReturn
 */
declare function UnitClass(this: void, UnitId: IUnitId): [string, string, number];
/** https://wow.gamepedia.com/API_UnitCreatureId */
declare function UnitCreatureId(this: void, UnitId: IUnitId): number;
/** https://wow.gamepedia.com/API_UnitCreatureType */
declare function UnitCreatureType(this: void, UnitId: IUnitId): string;
/**
 *
 *
 * @export
 * @param {IUnitId} Unit The first unit we want to check threat from
 * @param {IUnitId} OtherUnit The unit's threat table we are checking against
 * @example if (UnitDetailedThreatSituation("player", "target")[1] > 1) { print("Player is Tanking the Target")}
 * @return 0 [boolean] - Whether or not you are currently tanking the OtherUnit
 * @return 1 [number] - returns what status your threat is : 0 = not tanking, 1 = not tanking but close to, 2 = tanking but barely, 3 = firmly tanking or nil if not in threat list
 * @return 2 [number] - returns the threat percentage aggregated to how much needed to pull aggro
 * @return 3 [number] - returns the raw threat percentage or nil if not in threat list or nil if not in threat list
 * @return 4 [number] - returns total threat on the OtherUnit
 * @tupleReturn
 */
declare function UnitDetailedThreatSituation(this: void, Unit: IUnitId, OtherUnit: IUnitId): [boolean | number, number, number, number, number];
/** https://wow.gamepedia.com/API_UnitExists */
declare function UnitExists(this: void, UnitId: IUnitId): boolean;
/** https://wow.gamepedia.com/API_UnitGroupRolesAssigned */
declare function UnitGroupRolesAssigned(this: void, UnitId: IUnitId): string;
/** https://wow.gamepedia.com/API_UnitGetIncomingHeals */
declare function UnitGetIncomingHeals(this: void, UnitId: IUnitId): number;
/** https://wow.gamepedia.com/API_UnitGetTotalHealAbsorbs */
declare function UnitGetTotalHealAbsorbs(this: void, UnitId: IUnitId): number;
/** https://wow.gamepedia.com/API_UnitGUID */
declare function UnitGUID(this: void, UnitId: IUnitId): string;
/** https://wow.gamepedia.com/API_UnitHealth */
declare function UnitHealth(this: void, UnitId: IUnitId): number;
/** https://wow.gamepedia.com/API_UnitHealthMax */
declare function UnitHealthMax(this: void, UnitId: IUnitId): number;
/** https://wow.gamepedia.com/API_UnitInBattleground */
declare function UnitInBattleground(this: void, Unit: IUnitId): boolean;
/** https://wow.gamepedia.com/API_UnitInVehicle */
declare function UnitInVehicle(this: void, UnitId: IUnitId): boolean;
/** https://wow.gamepedia.com/API_UnitInParty */
declare function UnitInParty(this: void, UnitId: IUnitId): boolean;
/** https://wow.gamepedia.com/API_UnitInRaid */
declare function UnitInRaid(this: void, UnitId: IUnitId): boolean;
/** https://wow.gamepedia.com/API_UnitInPhase */
declare function UnitInPhase(this: void, UnitId: IUnitId): boolean;
/** https://wow.gamepedia.com/API_UnitIsDead */
declare function UnitIsDead(this: void, UnitId: IUnitId): boolean;
/** https://wow.gamepedia.com/API_UnitIsDeadOrGhost */
declare function UnitIsDeadOrGhost(this: void, UnitId: IUnitId): boolean;
/** https://wow.gamepedia.com/API_UnitIsGhost */
declare function UnitIsGhost(this: void, UnitId: IUnitId): boolean;
/** https://wow.gamepedia.com/API_UnitIsUnit */
declare function UnitIsUnit(this: void, FirstUnit: IUnitId, SecondUnit: IUnitId): boolean;
/** https://wow.gamepedia.com/API_UnitIsPlayer */
declare function UnitIsPlayer(this: void, UnitId: IUnitId): boolean;
/** https://wow.gamepedia.com/API_UnitIsTapped */
declare function UnitIsTapped(this: void, UnitId: IUnitId): boolean;
/** https://wow.gamepedia.com/API_UnitIsTapDenied */
declare function UnitIsTapDenied(this: void, UnitId: IUnitId): boolean;
/** https://wow.gamepedia.com/API_UnitIsWarModeDesired */
declare function UnitIsWarModeDesired(this: void, Unit: IUnitId): boolean;
/** https://wow.gamepedia.com/API_UnitIsWildBattlePet */
declare function UnitIsWildBattlePet(this: void, UnitId: IUnitId): boolean;
/** https://wow.gamepedia.com/API_UnitLevel */
declare function UnitLevel(this: void, UnitId: IUnitId): number;
/** https://wow.gamepedia.com/API_UnitName */
declare function UnitName(this: void, UnitId: IUnitId): string;
/** https://wow.gamepedia.com/API_UnitPower */
declare function UnitPower(this: void, UnitId: IUnitId, PowerType: IPowerType, Modified: boolean): number;
/** https://wow.gamepedia.com/API_UnitPowerMax */
declare function UnitPowerMax(this: void, UnitId: IUnitId, PowerType: IPowerType, Modified: boolean): number;
/** https://wow.gamepedia.com/API_UnitReaction */
declare function UnitReaction(this: void, UnitId: IUnitId, OtherUnitId: IUnitId): number    ;
/** https://wow.gamepedia.com/API_UnitDamage 
 * @tupleReturn
*/
declare function UnitDamage(this: void, UnitId: IUnitId): [number, number, number, number, number, number, number];
/** https://wow.gamepedia.com/API_UnitSpellHaste */
declare function UnitSpellHaste(this: void, UnitId: IUnitId): number;
/** https://wow.gamepedia.com/API_GetMasteryEffect */
declare function GetMasteryEffect(this: void, UnitId: IUnitId): number;
/** https://wow.gamepedia.com/API_UnitStagger */
declare function UnitStagger(this: void, Unit: IUnitId): number;
/**
 *
 *
 * @export
 * @param {void} this
 * @param {IUnitId} Unit
 * @param {IUnitId} OtherUnit
 * @returns {number}  returns what status your threat is : 0 = not tanking, 1 = not tanking but close to, 2 = tanking but barely, 3 = firmly tanking
 */
declare function UnitThreatSituation(this: void, Unit: IUnitId, OtherUnit: IUnitId): number | undefined;
//#endregion

//#region Luabox API

declare enum ObjectType {
    Object = 0,
    Item = 1,
    Container = 2,
    AzeriteEmpoweredItem = 3,
    AzeriteItem = 4,
    Unit = 5,
    Player = 6,
    ActivePlayer = 7,
    GameObject = 8,
    DynamicObject = 9,
    Corpse = 10,
    AreaTrigger = 11,
    SceneObject = 12,
    ConversationData = 13
}

/** Simple library that we use to store data */
declare namespace json {
    /** Encode an object into a string */
    function encode(this: void, value: object, state?: any): string;
    /** Decode a string into an object */
    function decode(this: void, obj: string, pos?: number, nullval?: boolean): object;
}

/** Get the items durability current and max
 * @tupleReturn
 */
declare function GetInventoryItemDurability(this: void, slotId: number): [number, number];
//#endregion

//#region Pet Battles API

declare type TOwnerIndex = 1 | 2;
declare type TPetIndex = 1 | 2 | 3;
declare type TAbilityIndex = 1 | 2 | 3;

declare namespace C_PetBattles {
    
    // C_PetBattles.AcceptPVPDuel	This function is not yet documented
    // C_PetBattles.AcceptQueuedPVPMatch	Accepts a found Pet Battle Queue.
    // C_PetBattles.CanAcceptQueuedPVPMatch	This function is not yet documented
    // C_PetBattles.CanActivePetSwapOut	This function is not yet documented
    function CanActivePetSwapOut(this: void): boolean;
    // C_PetBattles.CanPetSwapIn	This function is not yet documented
    function CanPetSwapIn(this: void, petIndex: number): boolean;
    // C_PetBattles.CancelPVPDuel	This function is not yet documented
    // C_PetBattles.ChangePet	Attempts to change your active pet
    // C_PetBattles.DeclineQueuedPVPMatch	This function is not yet documented
    // C_PetBattles.ForfeitGame	This function is not yet documented
    // C_PetBattles.GetAbilityEffectInfo	This function is not yet documented
    /** C_PetBattles.GetAbilityInfo	Returns information on a battle pet's ability
     * http://wowprogramming.com/docs/api/C_PetBattles.GetAbilityInfo.html
     * 0 = Ability Id
     * 1 = Ability Name
     * 2 = Icon Id
     * 3 = MaxCooldown
     * 4 = Description
     * 5 = NumTurns
     * 6 = AbilityPetType
     * 7 = NoStrongWeak
     * @tupleReturn */
    function GetAbilityInfo(this: void, ownerIndex: TOwnerIndex, petIndex: TPetIndex, abilityIndex: TAbilityIndex): [number, string, number, number, string, number, number, boolean];
    // C_PetBattles.GetAbilityInfoByID	Returns information about a pet battle ability based on the ID.
    // C_PetBattles.GetAbilityProcTurnIndex	This function is not yet documented
    // C_PetBattles.GetAbilityState	Returns the cooldown state of a pet ability
    function GetAbilityState(this: void, ownerIndex: TOwnerIndex, petIndex: TPetIndex, abilityIndex: TAbilityIndex): boolean;
    // C_PetBattles.GetAbilityStateModification	This function is not yet documented
    // C_PetBattles.GetActivePet	Returns the index of the currently active pet.
    function GetActivePet(this: void, ownerIndex: TOwnerIndex): number;
    // C_PetBattles.GetAllEffectNames	This function is not yet documented
    // C_PetBattles.GetAllStates	This function is not yet documented
    // C_PetBattles.GetAttackModifier	Returns the modification to attacks based on types.
    // C_PetBattles.GetAuraInfo	This function is not yet documented
    // C_PetBattles.GetBattleState	Returns the current battle state.
    // C_PetBattles.GetBreedQuality	Returns the breed quality of a pet.
    // C_PetBattles.GetDisplayID	This function is not yet documented
    // C_PetBattles.GetForfeitPenalty	This function is not yet documented
    // C_PetBattles.GetHealth	Returns the current health of a specific pet in the current pet battle.
    function GetHealth(this: void, ownerIndex: number, petIndex: number): number;
    // C_PetBattles.GetIcon	Returns the path of a pet's icon texture.
    // C_PetBattles.GetLevel	Returns the level of a pet
    function GetLevel(this: void, ownerIndex: number, petIndex: number): number;
    // C_PetBattles.GetMaxHealth	Returns the maximum health of a specific pet in the current pet battle.
    function GetMaxHealth(this: void, ownerIndex: number, petIndex: number): number;
    /** Returns the name of a pet
     * First return is player defined name
     * Second return is real name
     * @tupleReturn */
    function GetName(this: void, ownerIndex: number, petIndex: number): [string, string];
    // C_PetBattles.GetNumAuras	Returns the number of auras on a pet
    function GetNumAuras(this: void, ownerIndex: number, petIndex: number): number;
    // C_PetBattles.GetNumPets	Returns the number of pets a player/enemy has.
    function GetNumPets(this: void, ownerIndex: number): number;
    // C_PetBattles.GetPVPMatchmakingInfo	This function is not yet documented
    // C_PetBattles.GetPetSpeciesID	This function is not yet documented
    // C_PetBattles.GetPetType	This function is not yet documented
    function GetPetType(this: void, ownerIndex: number, petIndex: number): number;
    // C_PetBattles.GetPlayerTrapAbility	This function is not yet documented
    // C_PetBattles.GetPower	Returns the power of a pet.
    // C_PetBattles.GetSelectedAction	This function is not yet documented
    // C_PetBattles.GetSpeed	Returns the speed of a pet.
    // C_PetBattles.GetStateValue	This function is not yet documented
    /** C_PetBattles.GetTurnTimeInfo	Returns the remaining time and max time for waiting on a turn
     * @tupleReturn */
    function GetTurnTimeInfo(this: void): [number, number, number];
    // C_PetBattles.GetXP	Returns the current and maximum experience of a pet
    // C_PetBattles.IsInBattle	Returns true during a pet battle
    function IsInBattle(this: void): boolean;
    // C_PetBattles.IsPlayerNPC	Returns whether a participant in a pet battle is a player or an NPC
    // C_PetBattles.IsSkipAvailable	This function is not yet documented
    // C_PetBattles.IsTrapAvailable	This function is not yet documented
    // C_PetBattles.IsWaitingOnOpponent	Returns whether or not you are waiting on the opponent
    // C_PetBattles.IsWildBattle	Returns whether or not in wild battle.
    function IsWildBattle(this: void): boolean;
    // C_PetBattles.SetPendingReportBattlePetTarget	This function is not yet documented
    // C_PetBattles.SetPendingReportTargetFromUnit	This function is not yet documented
    // C_PetBattles.ShouldShowPetSelect	This function is not yet documented
    // C_PetBattles.SkipTurn	Does a pass on your turn for a round.
    // C_PetBattles.StartPVPDuel	This function is not yet documented
    // C_PetBattles.StartPVPMatchmaking	This function is not yet documented
    // C_PetBattles.StopPVPMatchmaking	This function is not yet documented
    // C_PetBattles.UseAbility	Uses an ability.
    // C_PetBattles.UseTrap	Throws the trap if the target pet has low enough health
    // C_PetJournal.AddAllPetSourcesFilter	This function is not yet documented
    // C_PetJournal.AddAllPetTypesFilter	This function is not yet documented
    // C_PetJournal.CagePetByID	This function is not yet documented
    // C_PetJournal.ClearAllPetSourcesFilter	This function is not yet documented
    // C_PetJournal.ClearAllPetTypesFilter	This function is not yet documented
    // C_PetJournal.ClearSearchFilter	This function is not yet documented
    // C_PetJournal.FindPetIDByName	This function is not yet documented
    // C_PetJournal.GetBattlePetLink	This function is not yet documented
    // C_PetJournal.GetNumCollectedInfo	Returns the number of pets for that species
    // C_PetJournal.GetNumPetSources	This function is not yet documented
    // C_PetJournal.GetNumPetTypes	This function is not yet documented
    // C_PetJournal.GetNumPets	Returns two integers, filtered count, and total count
    // C_PetJournal.GetOwnedBattlePetString	This function is not yet documented
    // C_PetJournal.GetPetAbilityInfo	This function is not yet documented
    // C_PetJournal.GetPetAbilityList	This function is not yet documented
    // C_PetJournal.GetPetCooldownByGUID	This function is not yet documented
    // C_PetJournal.GetPetInfoByIndex	This function is not yet documented
    // C_PetJournal.GetPetInfoByPetID	Retreives information about a battle pet from its GUID
    // C_PetJournal.GetPetInfoBySpeciesID	This function is not yet documented
    // C_PetJournal.GetPetLoadOutInfo	Returns pet and spell IDs
    // C_PetJournal.GetPetSortParameter	This function is not yet documented
    // C_PetJournal.GetPetStats	Retrieves the stats of a battle pet from its GUID
    // C_PetJournal.GetPetTeamAverageLevel	This function is not yet documented
    // C_PetJournal.GetSummonedPetGUID	This function is not yet documented
    // C_PetJournal.IsFindBattleEnabled	This function is not yet documented
    // C_PetJournal.IsFlagFiltered	This function is not yet documented
    // C_PetJournal.IsJournalReadOnly	This function is not yet documented
    // C_PetJournal.IsJournalUnlocked	This function is not yet documented
    // C_PetJournal.IsPetSourceFiltered	This function is not yet documented
    // C_PetJournal.IsPetTypeFiltered	This function is not yet documented
    // C_PetJournal.PetCanBeReleased	This function is not yet documented
    // C_PetJournal.PetIsCapturable	This function is not yet documented
    // C_PetJournal.PetIsFavorite	This function is not yet documented
    // C_PetJournal.PetIsHurt	This function is not yet documented
    // C_PetJournal.PetIsLockedForConvert	This function is not yet documented
    // C_PetJournal.PetIsRevoked	This function is not yet documented
    // C_PetJournal.PetIsSlotted	This function is not yet documented
    // C_PetJournal.PetIsSummonable	This function is not yet documented
    // C_PetJournal.PetIsTradable	This function is not yet documented
    // C_PetJournal.PickupPet	This function is not yet documented
    // C_PetJournal.ReleasePetByID	This function is not yet documented
    // C_PetJournal.SetAbility	Set battle pet ability
    // C_PetJournal.SetCustomName	This function is not yet documented
    // C_PetJournal.SetFavorite	This function is not yet documented
    // C_PetJournal.SetFlagFilter	This function is not yet documented
    // C_PetJournal.SetPetLoadOutInfo	Setup battle pet team
    // C_PetJournal.SetPetSortParameter	This function is not yet documented
    // C_PetJournal.SetPetSourceFilter	This function is not yet documented
    // C_PetJournal.SetPetTypeFilter	This function is not yet documented
    // C_PetJournal.SetSearchFilter	This function is not yet documented
    // C_PetJournal.SummonPetByGUID	This function is not yet documented
    // C_PetJournal.SummonRandomPet	This function is not yet documented
}

//#endregion

//#region Constants

declare const MINIMAP_TRACKING_MAILBOX: string;
//#endregion