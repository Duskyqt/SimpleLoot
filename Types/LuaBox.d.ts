// tslint:disable:ban-types

// Custom Unit Features
declare interface ILbAura {
    CanStealOrPurge: boolean;
    Harmful: boolean;
    Active: boolean;
    Duration: number;
    Caster: string;
    Cancelable: boolean;
    Passive: boolean;
    Name: string;
    Expiration: number;
    Count: number;
}

declare namespace Lb {
    // Scripts Management

    /**
     * Unloads LuaBox.
     *
     * @static
     * @memberof Lb
     */
    function Unload(this: void): void;

    /**
     * Download and load a specific Hash / Version.
     *
     * @static
     * @param {string} Hash
     * @param {number} [Version]
     * @memberof Lb
     */
    function LoadScript(this: void, Hash: string, Version?: number): void;

    /**
     * Unlocks a protected API function.
     *
     * @static
     * @memberof Lb
     */
    function Unlock(this: void, Function: Function, Arg1?: any, Arg2?: any, Arg3?: any): any;

    /**
     * Converts Guid to UnitId and process protected API.
     *
     * @static
     * @param {Function} Function
     * @param {*} Args
     * @returns {*}
     * @memberof Lb
     */
    function UnitTagHandler(this: void, Function: Function, Arg1?: any, Arg2?: any, Arg3?: any): any;

    // Files Management

    /**
     * Get the hack's base directory.
     *
     * @static
     * @returns {string}
     * @memberof Lb
     */
    function GetBaseDirectory(this: void): string;

    /**
     * Get the games's Directory
     *
     * @static
     * @returns {string}
     * @memberof Lb
     */
    function GetGameDirectory(this: void): string;

    /**
     * Get a list of the directories within a folder.
     *
     * @static
     * @param {string} Path
     * @returns {string[]}
     * @memberof Lb
     */
    function GetDirectories(this: void, Path: string): string[];

    /**
     * Creates a directory at the specified path.
     *
     * @static
     * @param {string} Path
     * @memberof Lb
     */
    function CreateDirectory(this: void, Path: string): void;

    /**
     * Get wether a directory can be found at the specified path.
     *
     * @static
     * @param {string} Path
     * @returns {boolean}
     * @memberof Lb
     */
    function DirectoryExists(this: void, Path: string): boolean;

    /**
     * Get wether a file can be found at the specified path.
     *
     * @static
     * @param {string} Path
     * @returns {boolean}
     * @memberof Lb
     */
    function FileExists(this: void, Path: string): boolean;

    /**
     * Get a list of the files within a folder.
     *
     * @static
     * @param {string} Path
     * @returns {string[]}
     * @memberof Lb
     */
    function GetFiles(this: void, Path: string): string[];

    /** Get the current's Map Id
     * @param this 
     */
    function GetMapId(this: void): number;

    /**
     * Write content into the specified files.
     *
     * @static
     * @param {string} Path
     * @param {string} Content
     * @param {boolean} Append
     * @memberof Lb
     */
    function WriteFile(this: void, Path: string, Content: string, Append?: boolean): void;

    /**
     * Read the content from the specified File.
     *
     * @static
     * @param {string} Path
     * @memberof Lb
     */
    function ReadFile(this: void, Path: string): string;

    // Objects Management

    /**
     * Get a list with the Guids of objects of set type within set distance.
     *
     * @static
     * @param {number} Radius
     * @param {ObjectType} Type1
     * @param {ObjectType} Type2
     * @param {ObjectType} Type3
     * @returns {Guid[]}
     * @memberof Lb
     */
    function GetObjects(this: void, Radius: number, Type1?: ObjectType, Type2?: ObjectType, Type3?: ObjectType): string[];

    /**
     * Get the Player's Corpse Position 
     * 
     * @static
     * @returns {Number[]} 
     * @memberof Lb
     * @tupleReturn
     */
    function GetPlayerCorpsePosition(this: void): [number, number, number];
    /**
     * Get and object's creator's Guid.
     *
     * @static
     * @param {Guid} Guid
     * @returns {Guid}
     * @memberof Lb
     */
    function ObjectCreator(this: void, Guid: string): string;

    /**
     * Get wether the object can be found in the objects manager.
     *
     * @static
     * @param {Guid} Guid
     * @returns {boolean}
     * @memberof Lb
     */
    function ObjectExists(this: void, Guid: string): boolean;

    /**
     * Get the object's Facing relative to the ground.
     *
     * @static
     * @param {Guid} Guid
     * @returns {number}
     * @memberof Lb
     */
    function ObjectFacing(this: void, Guid: string): number;

    /**
     * Get the Objects's Id. (same as creature id but requires no string split)
     *
     * @static
     * @param {Guid} Guid
     * @returns {number}
     * @memberof Lb
     */
    function ObjectId(this: void, Guid: string): number;

    /**
     * Interract with a specific object.
     *
     * @static
     * @param {Guid} Guid
     * @memberof Lb
     */
    function ObjectInteract(this: void, Guid: string): void;

    /**
     * Get wether an object is locked (used to detect if bobber has been triggered).
     *
     * @static
     * @param {Guid} Guid
     * @returns {boolean}
     * @memberof Lb
     */
    function ObjectLocked(this: void, Guid: string): boolean;

    /**
     * Get Object Name
     *
     * @static
     * @memberof Lb
     */
    function ObjectName(this: void, Guid: string): string;

    /**
     * Get the object's picth.
     *
     * @static
     * @param {Guid} Guid
     * @returns {[number, number]}
     * @memberof Lb
     * @tupleReturn
     */
    function ObjectPitch(this: void, Guid: string): [number, number];

    /**
     * Get the pointer of an Object.
     *
     * @static
     * @param {Guid} Guid
     * @returns {*}
     * @memberof Lb
     */
    function ObjectPointer(this: void, Guid: string): any;

    /**
     * Return X, Y, Z position of the object.
     *
     * @static
     * @param {Guid} Guid
     * @returns {string}
     * @memberof Lb
     * @tupleReturn
     */
    function ObjectPosition(this: void, Guid: string): [number, number, number];

    /** Get the position that was last clicked in the world surrounding the player
     * @tupleReturn
     */
    function GetLastWorldClickPosition(): [number, number, number];

    /**
     * Get the object's raw facing (relative to the world rather than the ground).
     *
     * @static
     * @param {Guid} Guid
     * @returns {number}
     * @memberof Lb
     */
    function ObjectRawFacing(this: void, Guid: string): number;

    /**
     * Get the Type of an Object.
     *
     * @static
     * @param {Guid} Guid
     * @returns {ObjectType}
     * @memberof Lb
     */
    function ObjectType(this: void, Guid: string): ObjectType;

    /**
     * Get at position of where a collision occured in the raycast between two positions.
     *
     * @static
     * @param {number} SelfX
     * @param {number} SelfY
     * @param {number} SelfZ
     * @param {number} OtherX
     * @param {number} OtherY
     * @param {number} OtherZ
     * @returns {Vector3}
     * @memberof Lb
     * @tupleReturn
     */
    function Raycast(this: void, SelfX: number, SelfY: number, SelfZ: number, OtherX: number, OtherY: number, OtherZ: number, LosFlags: number): [number, number, number] | null;

    /** Fetch the informations for auras on units
     *
     * @export
     * @param {void} this
     * @param {string} Guid
     * @param {number[]} SpellIds
     * @returns {ILbAura[]}
     */
    function UnitAurasInfo(this: void, Guid: string, SpellIds: number[]): ILbAura[];
    /** Get all the Auras from a unit
     *
     * @static
     * @param {Guid} Guid
     * @returns {number}
     * @memberof Lb
     */
    function UnitAuras(this: void, Guid: string): { [Index: number]: string };

    /**
     * Get the bounding height of a unit. Used to better handle Raycast checks on tall units.
     *
     * @static
     * @param {Guid} Guid
     * @returns {number}
     * @memberof Lb
     */
    function UnitBoundingHeight(this: void, Guid: string): number;

    /**
     * Get the unit's bounding radius.
     *
     * @static
     * @param {Guid} Guid
     * @returns {number}
     * @memberof Lb
     */
    function UnitBoundingRadius(this: void, Guid: string): number;

    /**
     * Get the unit's casting informations.
     *
     * @static
     * @param {Guid} Guid
     * @returns {[number, string, number, boolean]} - Cast Identifier, TargetGuid, TimeLeftInSeconnds, NotInterruptible
     * @memberof Lb
     * @tupleReturn
     */
    function UnitCastingInfo(this: void, Guid: string): [number, string, number, boolean];

    /**
     * Get the unit's channel informations.
     *
     * @static
     * @param {Guid} Guid
     * @returns {[number, number, number, number]}
     * @memberof Lb
     * @tupleReturn
     */
    function UnitChannelInfo(this: void, Guid: string): [number, number, number, number];

    /**
     * Get the unit's collision scale.
     *
     * @static
     * @param {Guid} Guid
     * @returns {number}
     * @memberof Lb
     */
    function UnitCollisionScale(this: void, Guid: string): number;

    /**
     * Get the unit's combat reach.
     *
     * @static
     * @param {Guid} Guid
     * @returns {number}
     * @memberof Lb
     */
    function UnitCombatReach(this: void, Guid: string): number;

    /** Get wether the unit is lootable
     *
     * @export
     * @param {void} this
     * @param {string} Guid
     * @returns {boolean}
     */
    function UnitIsLootable(this: void, Guid: string): boolean;
    /** Get wether the unit has a specific movement flag enabled */
    function UnitHasMovementFlag(this: void, Guid: string, Flag: number): boolean;
    /** Get the unit's flags
     *
     * @export
     * @param {void} this
     * @param {string} Guid
     * @returns {boolean}
     */
    function UnitNpcFlags(this: void, Guid: string): any;
    /** Get wether the unit has a specifig flag, should be used along ENpcFlags
     *
     * @export
     * @param {void} this
     * @param {string} Guid
     * @returns {boolean}
     */
    function UnitHasNpcFlag(this: void, Guid: string, Flag: number): boolean;
    /**
     * Get a Unit's target's Guid.
     *
     * @static
     * @param {Guid} Guid
     * @returns {Guid}
     * @memberof Lb
     */
    function UnitTarget(this: void, Guid: string): string;

    /** Get a Unit's dynamic flag
     *
     * @export
     * @param {void} this
     * @param {string} string
     * @param {number} flag
     * @returns {boolean}
     */
    function ObjectHasDynamicFlag(this: void, Guid: string, flag: number): boolean;

    // Misc

    /**
     * Cancel the current and pending spells.
     *
     * @static
     * @memberof Lb
     */
    function CancelPendingSpells(this: void): void;

    /**
     * Click at a specified vector location.
     *
     * @static
     * @param {number} X
     * @param {number} Y
     * @param {number} Z
     * @memberof Lb
     */
    function ClickPosition(this: void, X: number, Y: number, Z: number, IsRightClick?: boolean): void;

    /** Get the client type. */
    function GetClientType(this: void): number;

    /** Get the duration since lb has been enabled. Used for performance benchmarking. */
    function GetClockTime(this: void): number;

    /** Get wether a Spell is currently pending or being casted. */
    function IsAoEPending(this: void): boolean | number;

    /** Get wether the unit has a specific lock type */
    function GameObjectHasLockType(this: void, Object: string, LockType: number): boolean;
    /** Move to specified position */
    function MoveTo(this: void, X: number, Y: number, Z: number): void;

    /** Set the player's angles. */
    function SetPlayerAngles(this: void, Angle: number, Pitch?: number): void;

    /** Use with common abilities to prevent your character from being afk. */
    function UpdateAFK(this: void): void;

    /** Forces an update to player's movement on the server */
    function UpdatePlayerMovement(this: void): void;

    // Developper mode

    /** Get wether the Dev mode is enabled or not. */
    function GetDevMode(this: void): boolean;

    /** Toggles Developer mode on or off. When developer mode is on, lb can be reached from the global scope. */
    function SetDevMode(this: void, Enabled: boolean): void;

    // Web service async call. Made to pull API from http://api.luabox.ru/
    function WebServiceAsync(this: void, Method: string, Url: string, Success: (this: void, data: string) => void, Error: (this: void, error: string) => void): void;
//#region Enums
    namespace EUnitFlags {        
        const CannotSwim = 16384;
        const Confused = 4194304;
        const Disarmed = 2097152;
        const Fleeing = 8388608;
        const ImmuneToNpc = 512;
        const ImmuneToPc = 256;
        const InCombat = 524288;
        const Looting = 1024;
        const Mount = 134217728;
        const NonAttackable = 2;
        const NotAttackable1 = 128;
        const NotSelectable = 33554432;
        const Pacified = 131072;
        const PetInCombat = 2048;
        const PlayerControlled = 16777216;
        const Preparation = 32;
        const PvpAttackable = 8;
        const RemoveClientControl = 4;
        const Rename = 16;
        const ServerController = 1;
        const Sheath = 1073741824;
        const Silenced = 8192;
        const Skinnable = 67108864;
        const Stunned = 262144;
        const TaxiFlight = 1048576;
    }
    namespace EUnitFlags2 {
        const AllowChangingTalents = 512;
        const AllowCheatSpells = 262144;
        const AllowEnemyInteract = 16384;
        const ComprehendLang = 8;
        const DisablePredStats = 256;
        const DisableTurn = 32768;
        const DisarmOffhand = 128;
        const DisarmRanged = 1024;
        const FeignDeath = 1;
        const ForceMovement = 64;
        const IgnoreReputation = 4;
        const InstantAppearModel = 3;
        const MirrorImage = 16;
        const NoActions = 8388608;
        const PlayDeathAnim = 131072;
        const PreventSpellClick = 8192;
        const RegeneratePower = 2048;
        const RestrictPartyInteraction = 4096;
    }
    namespace EUnitNpcFlags {
        const ArtifactPowerRespec = 134217728;
        const Auctioneer = 2097152;
        const Banker = 131072;
        const BattleMaster = 1048576;
        const BlackMarket = 2147483648;
        const Gossip = 1;
        const GuildBanker = 8388608;
        const Innkeeper = 65536;
        const Mailbox = 67108864;
        const PlayerVehicle = 33554432;
        const QuestGiver = 2;
        const Repair = 4096;
        const SpellClick = 16777216;
        const SpiritGuide = 32768;
        const StableMaster = 4194304;
        const Trainer = 16;
        const TrainerClass = 32;
        const TrainerProfession = 64;
        const Transmogrifier = 268435456;
        const VaultKeeper = 536870912;
        const Vendor = 128;
        const VendorAmmo = 256;
        const VendorFood = 512;
        const VendorPoison = 1024;
        const VendorReagent = 2048;
        const WildBattlePet = 1073741824;
    }
    namespace EGameObjectTypes {
        const AreaDamage = 12;
        const AuraGenerator = 30;
        const BarberChair = 32;
        const Binder = 4;
        const Button = 1;
        const Camera = 13;
        const CapturePoint = 42;
        const Chair = 7;
        const ChallengeModeReward = 51;
        const Chest = 3;
        const ClientCreature = 40;
        const ClientItem = 41;
        const ControlZone = 29;
        const DestructibleBuilding = 33;
        const Door = 0;
        const DuelArbiter = 16;
        const DungeonDifficulty = 31;
        const FishingHole = 25;
        const FishingNode = 17;
        const FlagDrop = 26;
        const FlagStand = 24;
        const GarrisonBuilding = 38;
        const GarrisonMonument = 44;
        const GarrisonMonumentPlaque = 46;
        const GarrisonPlot = 39;
        const GarrisonShipment = 45;
        const GatheringNode = 50;
        const Generic = 5;
        const Goober = 10;
        const GuardPost = 21;
        const GuildBank = 34;
        const Invalid = -1;
        const ItemForge = 47;
        const KeystoneReceptacle = 49;
        const Mailbox = 19;
        const MapObject = 14;
        const MapObjTransport = 15;
        const MeetingStone = 23;
        const MiniGame = 27;
        const Multi = 52;
        const NewFlag = 36;
        const NewFlagDrop = 37;
        const PhaseableMo = 43;
        const PvpReward = 55;
        const QuestGiver = 2;
        const Ritual = 18;
        const SiegeableMo = 54;
        const SiegeableMulti = 53;
        const SpellCaster = 22;
        const SpellFocus = 8;
        const Text = 9;
        const Transport = 11;
        const Trap = 6;
        const TrapDoor = 35;
        const UiLink = 48;
    }
    namespace EMovementFlags {
        const Ascending  = 2097152;
        const Backward  = 2;
        const CanFly  = 8388608;
        const Descending  = 4194304;
        const Falling  = 2048;
        const FallingFar  = 4096;
        const Flying  = 16777216;
        const Forward  = 1;
        const Immobilized  = 1024;
        const PitchDown  = 128;
        const PitchUp  = 64;
        const StrafeLeft  = 4;
        const StrafeRight  = 8;
        const Swimming  = 1048576;
        const TurnLeft  = 16;
        const TurnRight  = 32;
        const Walking  = 256;
    }
    namespace EUnitDynamicFlags {
        const Invisible = 1;
        const Phased = 2;
        const Lootable = 4;
        const Tracked = 8;
        const Tapped = 16;
        const SpecialInfo = 32;
        const Dead = 64;
        const ReferAFriendLinked = 128;
    }
    namespace ELockTypes {
        const AncientMana = 30;
        const Archaelogy = 22;
        const ArmTrap = 9;
        const Blasting = 16;
        const CalcifiedElvenGems = 7;
        const CataclysmHerbalism = 35;
        const CataclysmMining = 43;
        const ClassicHerbalism = 32;
        const ClassicMining = 40;
        const Close = 8;
        const DisarmTrap = 4;
        const DraenorHerbalism = 37;
        const DraenorMining = 45;
        const Fishing = 19;
        const Gahzridian = 15;
        const Herbalism = 2;
        const Inscription = 20;
        const KulTiranHerbalien = 39;
        const KulTiranMining = 47;
        const LegionHerbalism = 38;
        const LegionMining = 46;
        const LockPicking = 1;
        const LumberMill = 28;
        const Mining = 3;
        const NorthrendHerbalism = 34;
        const NorthrendMining = 42;
        const Open = 5;
        const OpenAttacking = 14;
        const OpenFromVehicle = 21;
        const OpenKneeling = 13;
        const OpenTinkering = 12;
        const OutlandHerbalism = 33;
        const OutlandMining = 41;
        const PandariaHerbalism = 36;
        const PandariaMining = 44;
        const PvpClose = 18;
        const PvpOpen = 17;
        const PvpOpenFast = 23;
        const QuickClose = 11;
        const QuickOpen = 10;
        const Skinning = 29;
        const Skinning2 = 48;
        const Treasure = 6;
        const WarBoard = 31;
    }
    namespace EClientTypes {
        const Classic = 1;
        const Retail = 0;
    }
    namespace ERaycastFlags {
        const Collision = 1048849;
        const Cull = 524288;
        const DoodadCollision = 1;
        const DoodadRender = 2;
        const EntityCollision = 1048576;
        const EntityRender = 2097152;
        const LineOfSight = 1048592;
        const LiquidAll = 131072;
        const LiquidWaterWalkable = 65536;
        const Terrain = 256;
        const WmoCollision = 16;
        const WmoIgnoreDoodad = 8192;
        const WmoNoCamCollision = 64;
        const WmoRender = 32;
    }
//#endregion
//#region Nav Manager

    /** The Navigator singleton */
    namespace Navigator {
        /** Get the current destination point */
        function GetDestination(): [number, number, number] | undefined;
        /** Move to the location under the cursor */
        function MoveToWorldPosition(this: void): void;
        /** Move to the map location under the cursor */
        function MoveToWorldMapPosition(this: void): void;
        /** Move to a set position 
         * @noself
        */
        function MoveTo(this:void, X: number, Y: number, Z: number, Index: number, ProximityTolerance: number): number;
        /** Stop navigation and all tasks */
        function Stop(): void;
    }

  
    

    /** From Player to unit */
    function GetDistance3D(this: void, ObjectGuid: string): number;
    /** Between two objects */
    function GetDistance3D(this: void, ObjectGuid: string, Object2Guid: string): number;
    /** From Player to Position */
    function GetDistance3D(this: void, X: number, Y: number, Z: number): number;
    /** Between two Positions */
    function GetDistance3D(this: void, X: number, Y: number, Z: number, X2: number, Y2: number, Z2: number): number;
     
    /** Disable an exclude filter, effectively allowing the nav to path trough it */
    function NavMgr_ClearExcludeFilter(this: void, flag: number): void;
    /** Get a point as close as possible to the specified position.
     * This has a limited 'searchbox' , we can adjust it if it fails for your cases
     * @tupleReturn
     */
    function NavMgr_GetClosestPointOnMesh(this: void, x: number, y: number, z: number, xTolerance?: number, yTolerance?: number, zTolerance?: number): Position | []; 

    /** Get a point as close as possible to the specified position.
     * This has a limited 'searchbox' , we can adjust it if it fails for your cases
     */
    function NavMgr_GetClosestPointInCubes(this: void, x: number, y: number, z: number): { x: number, y: number, z: number, distanceToThatPoint: number} | undefined;
    /** Get the current filter state for a given flag, the flag can be of enum ENavFloorFlags or ENavMeshTypes */
    function NavMgr_GetExcludeFilter(this: void, flag: number): boolean;
      /** Get the mesh state
     * 0 - Empty
     * 1 - Ready
     * 2 - Modified
     */
    function NavMgr_GetMeshState(this: void): number;
    /** Get the currently ongoing Nav Connection Id if a connection is ongoing */
    function NavMgr_GetNavConnection(this: void, Index: number): INavConnection;
    
    /** From Player to unit */
    function NavMgr_GetPath(this: void, ObjectGuid: string): { [Index: number]: {x: number, y: number, z: number} };
    /** Between two objects */
    function NavMgr_GetPath(this: void, ObjectGuid: string, Object2Guid: string): { [Index: number]: {x: number, y: number, z: number} };
    /** From Player to Position */
    function NavMgr_GetPath(this: void, X: number, Y: number, Z: number): { [Index: number]: {x: number, y: number, z: number} };
    /** Between two Positions */
    function NavMgr_GetPath(this: void, X: number, Y: number, Z: number, X2: number, Y2: number, Z2: number): { [Index: number]: {x: number, y: number, z: number} };

    /** Get the current Path index */
    function NavMgr_GetPathIndex(this: void): number;
     /** Look for a random point on the mesh.
     * @param DontCheckForIsReachable If bool is not set or false, it will always make sure that the returned point is reachable by a navpath from your player position
     */
    function NavMgr_GetRandomPoint(this: void, DontCheckForIsReachable: boolean): { x: number, y: number, z: number };
    /** Look for a random point on the mesh within a set distance from a specified position. */
    function NavMgr_GetRandomPointInCircle(this: void, x: number, y: number, z: number, radiusMin: number, radiusMax: number): { x: number, y: number, z: number };
    /** Get a table with the nav thresholds */
    function NavMgr_GetThresholds(this: void): any;
    /** Get wether this position is on the Mesh */
    function NavMgr_IsPositionOnMesh(this: void, X: number, Y: number, Z: number): boolean;
    /** Get wether we can get a valid path to this position
     * Startpos is Player, targetid is optional (helps with path caching when you spam that function for a moving target)
     */
    function NavMgr_IsReachable(this: void, x: number, y: number, z: number, targetId: number): boolean; 
    /** Get wether we can get a valid path from one position to another
     * Startpos and EndPos are needed
     */
    function NavMgr_IsReachable(this: void, x: number, y: number, z: number, x2: number, y2: number, z2: number, targetId: number): boolean; 
    /** Get wether the nav mesh UI is visible */
    function NavMgr_IsUIVisible(this: void): boolean;
    /** Move to a location */
    function NavMgr_MoveTo(this: void, X: number, Y: number, Z: number, TargetId: number): any;
    /** Enable this exclude filter, effectively avoiding that kind of terain */
    function NavMgr_SetExcludeFilter(this: void, flag: number): void;
    /** Sets the current path index */
    function NavMgr_SetPathIndex(this: void, Index: number): void;
    /** Stops evverything, resets navigation */
    function NavMgr_Stop(this: void): any;
    /** Toggle the UI visibility */
    function NavMgr_ToggleUI(this: void, state: boolean): void;
   
    namespace math {
        function distance3d(this: void, x: number | { x: number, y: number, z: number }, y: number | { x: number, y: number, z: number }, z: number, x1: number, y1: number, z1: number): number;
        function distance2d(this: void, x: number | { x: number, y: number }, y: number | { x: number, y: number }, x1: number, y1: number): number;
        function magnitude(this: void, X: number[] | number, Y?: number, Z?: number): number;
        function normalize(this: void, Table: {x: number, y: number, z: number}): {x: number, y: number, z: number};
        function round(this: void, Value: number, Decimals: number): number;
        function vectorize(this: void, X: number, Y: number, Z: number, X2: number, Y2: number, Z2: number): {x: number, y: number, z: number};
        function normalizeRadian(this: void, Angle: number): number;
    }
    namespace table {
        function find(this: void, table: any, searchVal: any): number;
        function size(this: void, table: any): number;
        function valid(this: void, table: any): boolean;
    }
    interface ITextureConfig {
        color: IColor;
        texture: string;
        width: number;
        height: number;
        left: number;
        right: number;
        top: number;
        bottom: number;
        scale: number;
        alpha: number;
    }
    namespace Draw {
        function Box(this: void, X1: number, Y1: number, Z1: number, Width: number, Height: number, Rotation: number, OffsetX: number, OffsetY: number, Size: number, Color?: { R: number, G: number, B: number, A: number }): void;
        function Circle(this: void, X1: number, Y1: number, Z1: number, Size: number, Color?: { R: number, G: number, B: number, A: number }): void;
        function ClearCanvas(this: void): void;
        function Line(this: void, X1: number, Y1: number, Z1: number, X2: number, Y2: number, Z2: number, Size: number, Color?: { R: number, G: number, B: number, A: number }): void;
        function Text(this: void, Text: string, Font: string, X1: number, Y1: number, Z1: number, Size: number, Color?: { R: number, G: number, B: number, A: number }): void;
        function Texture(this: void, Config: ITextureConfig, X: number, Y: number, Z: number, ForcedColor: IColor): void;
    }

    
    //#endregion
}

declare interface INavConnection {
    enabled: boolean;
    type: number;
    id: number;
    details: {
        hx_A: number;
        hy_A: number;
        hz_A: number;
        hx_B: number;
        hy_B: number;
        hz_B: number;
        luacode_bugged: boolean;
        luacode: string;
        luacode_compiled: Function | undefined;
        description: string;
        subtype: number;
    };
    sideA: INode;
    sideB: INode;
}

declare interface INode {
    usedfloorflags: number;
    radius: number;
    nodetype: number;
    usedcubeflags: number;
    walkable: boolean;
    x: number;
    y: number;
    z: number;
    connected: number;
    nodeflags: number;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare enum HttpMethod {
    Get = "GET",
    Post = "POST"
}

declare interface IVector3 {
    position: [number, number, number];
    X: number;
    Y: number;
    Z: number;
    DistanceTo(other: IVector3): number;
    AngleTo(other: IVector3): number;
    Print(): void;
    Project(direction: number, distance: number): IVector3;
}

/** Uses the unlocked version of the Lb.ObjectInteract */
declare function UnlockedInteract(this: void, UnitId: IUnitId): void;


/** Position in an array as returned by LuaBox */
declare type Position = [number, number, number];
declare type Position2D = [number, number];
