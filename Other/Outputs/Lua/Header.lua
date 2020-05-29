-- This header is used to feed the inner scope of the addon with links to the global environment.
-- If you need additional API from wow you need to start by adding it here and then you can update the types to reflect this change.

local function Load()
local lb = __LB__
local Environment = {
	AddonName = AddonName,
	-- Lua API
	_G = _G,
	bit = bit,
	cos = math.cos,
	debugstack = debugstack,
	error = error,
	geterrorhandler = geterrorhandler,
	getmetatable = getmetatable,
	ipairs = ipairs,
	loadstring = loadstring,
	math = math,
	DoAtan2 = function (...) return math.atan2(...) end, -- Atan2 is wrongly transpiled so we use this detour
	next = next,
	pairs = pairs,
	pcall = pcall,
	-- If you lost track of where the prints come from or another dev forgot to remove one switch print with debugstack
	-- print = function (...) return print(debugstack(print("|cffFFFFFF[|cffff8000" + AddonName + "|cffFFFFFF] |r", ...))) end,
	print = function (...) return print("|cffFFFFFF[|cffff8000" .. AddonName .. "|cffFFFFFF] |r", ...) end,
	rad = math.rad,
    require = require,
    rawget = rawget,
	rawset = rawset,
	select = select,
	setmetatable = setmetatable,
	sin = math.sin,
	string = string,
	table = table,
	tinsert = table.insert,
	tonumber = tonumber,
	tostring = tostring,
	tremove = table.remove,
	type = type,
	unpack = unpack,
	strsplit = strsplit,
	xpcall = xpcall,

	-- Flight Masters
	CloseTaxiMap = CloseTaxiMap,
	NumTaxiNodes = NumTaxiNodes,
	TaxiNodeCost = TaxiNodeCost,
	TakeTaxiNode = TakeTaxiNode,
	TaxiNodeGetType = TaxiNodeGetType,
	TaxiNodeName = TaxiNodeName,
	TaxiNodePosition = TaxiNodePosition,
	UnitOnTaxi = UnitOnTaxi,

	-- Wow API
	CameraOrSelectOrMoveStart = function (...) return lb.Unlock(CameraOrSelectOrMoveStart, ...) end,
	CameraOrSelectOrMoveStop = function (...) return lb.Unlock(CameraOrSelectOrMoveStop, ...) end,
	CancelShapeshiftForm = function (...) return lb.Unlock(CancelShapeshiftForm, ...) end,
	CastSpellByID = function (...) return lb.UnitTagHandler(lb.Unlock, CastSpellByID, ...) end,
	CastSpellByName = function (...) return lb.UnitTagHandler(lb.Unlock, CastSpellByName, ...)	end,
	CloseLoot = CloseLoot,
	CreateVector2D = CreateVector2D,
	GetAddOnMemoryUsage = GetAddOnMemoryUsage,
	GetInventoryItemDurability = GetInventoryItemDurability,
	GetNumGroupMembers = GetNumGroupMembers,
	GetNumLootItems = GetNumLootItems,
	GetNumSpellTabs = GetNumSpellTabs,
	GetSpellTabInfo = GetSpellTabInfo,
	GetSpellBookItemName = GetSpellBookItemName,
	IsInGroup = IsInGroup,
	IsInRaid = IsInRaid,
	LootSlot = LootSlot,
    GetProfessionInfos = GetProfessionInfos,
    GetLatestThreeSenders = GetLatestThreeSenders,
    GetInboxNumItems = GetInboxNumItems,
    GetProfessions = GetProfessions,
	LootSlotHasItem = LootSlotHasItem,
	PetAssistMode = function (...) return lb.Unlock(PetAssistMode, ...) end,
	PetPassiveMode = function (...) return lb.Unlock(PetPassiveMode, ...) end,
	RunMacroText = function (...) return  lb.Unlock(RunMacroText, ...); end,
	SlashCmdList = SlashCmdList,
	SpellIsTargeting = function (...) return lb.UnitTagHandler(lb.Unlock, SpellIsTargeting, ...) end,
	SpellStopCasting = function (...) return lb.Unlock(SpellStopCasting, ...) end,
	SpellStopTargeting = function (...) return lb.Unlock(SpellStopTargeting, ...) end,
	TargetUnit = function (...) return ... and lb.UnitTagHandler(TargetUnit, ...) or false end,
	UnitInVehicle = UnitInVehicle,
	UnitIsAFK = UnitIsAFK,
	UpdateAddOnMemoryUsage = UpdateAddOnMemoryUsage,
	UseInventoryItem = function (...) return ... and lb.UnitTagHandler(lb.Unlock, UseInventoryItem, ...) or lb.Unlock(UseInventoryItem, ...) end,
    UseItemByName = function (...) return ... and lb.UnitTagHandler(lb.Unlock, UseItemByName, ...) or lb.Unlock(UseItemByName, ...) end,
	WorldMapFrame = WorldMapFrame,
    MailFrame = MailFrame,
    
    RealMobHealth = RealMobHealth,
	-- Units API
	CastingInfo = function (...) return lb.UnitTagHandler(CastingInfo) end,
	ChannelInfo = function (...) return lb.UnitTagHandler(ChannelInfo) end,
	GetRaidRosterInfo = function (...) return lb.UnitTagHandler(GetRaidRosterInfo, ...) end,
	GetRaidTargetIndex = function (...) return lb.UnitTagHandler(GetRaidTargetIndex, ...) end,
	GetUnitSpeed = function (...) return lb.UnitTagHandler(GetUnitSpeed, ...) end,
	UnitAffectingCombat = function (...) return lb.UnitTagHandler(UnitAffectingCombat, ...) end,
	UnitCanAttack = function (...) return lb.UnitTagHandler(UnitCanAttack, ...) end,
	UnitCastingInfo = function (...) return lb.UnitTagHandler(UnitCastingInfo, ...) end,
	UnitChannelInfo = function (...) return lb.UnitTagHandler(UnitChannelInfo, ...) end,
	UnitClass = function (...) return lb.UnitTagHandler(UnitClass, ...) end,
	UnitClassification = function (...) return lb.UnitTagHandler(UnitClassification, ...) end,
	UnitCreatureType = function (...) return lb.UnitTagHandler(UnitCreatureType, ...) end,
	UnitDetailedThreatSituation = function (...) return lb.UnitTagHandler(UnitDetailedThreatSituation, ...) or 0 end,
	UnitExists = function (...) return lb.UnitTagHandler(UnitExists, ...) end,
	UnitGetIncomingHeals = function (...) return lb.UnitTagHandler(UnitGetIncomingHeals, ...) or 0 end,
	UnitGetTotalHealAbsorbs = function (...) return lb.UnitTagHandler(UnitGetTotalHealAbsorbs, ...) or 0 end,
	UnitGroupRolesAssigned = function (...) return lb.UnitTagHandler(UnitGroupRolesAssigned, ...) end,
	UnitGUID = function (...) return lb.UnitTagHandler(UnitGUID, ...) end,
	UnitHealth = function (...) return lb.UnitTagHandler(UnitHealth, ...) or 100 end,
	UnitHealthMax = function (...) return lb.UnitTagHandler(UnitHealthMax, ...) or 100 end,
	UnitInRaid = function (...) return lb.UnitTagHandler(UnitInRaid, ...) end,
	UnitInParty = function (...) return lb.UnitTagHandler(UnitInParty, ...) end,
	UnitIsDead = function (...) return lb.UnitTagHandler(UnitIsDead, ...) end,
	UnitIsDeadOrGhost = function (...) return lb.UnitTagHandler(UnitIsDeadOrGhost, ...) end,
	UnitIsGhost = function (...) return lb.UnitTagHandler(UnitIsGhost, ...) end,
	UnitIsPlayer = function (...) return lb.UnitTagHandler(UnitIsPlayer, ...) end,
	UnitIsPVP = function (...) return lb.UnitTagHandler(UnitIsPVP, ...) end,
	UnitIsUnit = function (...) return lb.UnitTagHandler(UnitIsUnit, ...) end,
	UnitIsVisible = function (...) return lb.UnitTagHandler(UnitIsVisible, ...) end,
	UnitIsTapDenied = function (...) return lb.UnitTagHandler(UnitIsTapDenied, ...) end,
	UnitLevel = function (...) return lb.UnitTagHandler(UnitLevel, ...) or 120 end,
	UnitName = function (...) return lb.UnitTagHandler(UnitName, ...) end,
	UnitPlayerOrPetInParty = function (...) return lb.UnitTagHandler(UnitPlayerOrPetInParty , ...) end,
	UnitPlayerOrPetInRaid = function (...) return lb.UnitTagHandler(UnitPlayerOrPetInRaid , ...) end,
	UnitThreatSituation = function (...) return lb.UnitTagHandler(UnitThreatSituation, ...) or 0 end,
	UnitTarget = function (...) return lb.UnitTagHandler(lb.UnitTarget, ...) end,
	
	-- Buffs API
	UnitBuff = function (...) return lb.UnitTagHandler(UnitBuff, ...) end,
	UnitDebuff = function (...) return lb.UnitTagHandler(UnitDebuff, ...) end,
	UnitAura = function (...) return lb.UnitTagHandler(UnitAura, ...) end,

	-- Player API
	GetHaste = GetHaste,
	GetInstanceInfo = GetInstanceInfo,
	GetPVPDesired = GetPVPDesired,
	GetSpecialization = GetSpecialization,
	GetSpecializationInfo = GetSpecializationInfo,
	GetUnitMaxHealthModifier = GetUnitMaxHealthModifier,
	HasFullControl = HasFullControl,
	IsAutoRepeatSpell = IsAutoRepeatSpell,
	IsCurrentSpell = IsCurrentSpell,
	IsFalling = IsFalling,
	IsFlying = IsFlying,
	IsInInstance = IsInInstance,
	IsMounted = IsMounted,
	IsPetActive = IsPetActive,
	UnitAttackSpeed = UnitAttackSpeed,
	UnitInBattleground = UnitInBattleground,
	UnitIsWarModeDesired = UnitIsWarModeDesired,
	UnitOnTaxi = UnitOnTaxi,
	
	-- PlayerPet API
	DisableSpellAutocast = DisableSpellAutocast,
	EnableSpellAutocast = EnableSpellAutocast,
	GetPetActionInfo = GetPetActionInfo,
	IsPetAttackActive = IsPetAttackActive,
	PetAttack = function (...) return lb.UnitTagHandler(PetAttack, ...) end,

	-- Power API
	GetPowerRegen = GetPowerRegen,
	GetRuneCooldown = GetRuneCooldown,
	UnitPower = UnitPower,
	UnitPowerMax = UnitPowerMax,
	UnitStagger = UnitStagger,
	
	-- Spells API
	GetSpellCharges = GetSpellCharges,
	GetSpellCooldown = GetSpellCooldown,
	GetSpellCount = GetSpellCount,
	GetSpellDescription = GetSpellDescription,
	GetSpellInfo = GetSpellInfo,
	GetTotemInfo = GetTotemInfo,
	GetTotemTimeLeft = GetTotemTimeLeft,
	IsUsableSpell = IsUsableSpell,
	IsPlayerSpell = IsPlayerSpell,
	IsSpellInRange = function (...) return lb.UnitTagHandler(IsSpellInRange, ...) end,
	IsSpellKnown = IsSpellKnown,

	-- Stats API
	CR_VERSATILITY_DAMAGE_DONE = CR_VERSATILITY_DAMAGE_DONE,
	GetCombatRating = GetCombatRating,
	GetCombatRatingBonus = GetCombatRatingBonus,
	GetVersatilityBonus = GetVersatilityBonus,
	GetMasteryEffect = GetMasteryEffect,
	GetCritChance = GetCritChance,
	GetHaste = GetHaste,
	UnitAttackPower = UnitAttackPower,
	UnitDamage = UnitDamage,
	UnitSpellHaste = UnitSpellHaste,

	-- Keybinds
	AscendStop = function () return lb.Unlock(AscendStop) end,
	JumpOrAscendStart = function () return lb.Unlock(JumpOrAscendStart) end,
	JumpOrAscendStop = function () return lb.Unlock(JumpOrAscendStop) end,
	MoveBackwardStart = function () return lb.Unlock(MoveBackwardStart) end,
	MoveBackwardStop = function () return lb.Unlock(MoveBackwardStop) end,
	MoveForwardStart = function () return lb.Unlock(MoveForwardStart) end,
	MoveForwardStop = function () return lb.Unlock(MoveForwardStop) end,
	StrafeLeftStart = function () return lb.Unlock(StrafeLeftStart) end,
	StrafeLeftStop = function () return lb.Unlock(StrafeLeftStop) end,
	StrafeRightStart = function () return lb.Unlock(StrafeRightStart) end,
	StrafeRightStop = function () return lb.Unlock(StrafeRightStop) end,
	TurnLeftStart = function () return lb.Unlock(TurnLeftStart) end,
	TurnLeftStop = function () return lb.Unlock(TurnLeftStop) end,
	TurnRightStart = function () return lb.Unlock(TurnRightStart) end,
	TurnRightStop = function () return lb.Unlock(TurnRightStop) end,
	PitchUpStart = function () return lb.Unlock(PitchUpStart) end,
	PitchDownStart = function () return lb.Unlock(PitchDownStart) end,
	PitchDownStop = function () return lb.Unlock(PitchDownStop) end,
	PitchUpStop = function () return lb.Unlock(PitchUpStop) end,
	IsMouselooking = IsMouselooking,
	IsShiftKeyDown = IsShiftKeyDown,
	IsSwimming = IsSwimming,
	IsControlKeyDown = IsControlKeyDown,
	MouselookStart = MouselookStart,

    -- General API
    ClearTarget = function () return lb.Unlock(ClearTarget) end,
	CombatLogGetCurrentEventInfo = CombatLogGetCurrentEventInfo,
	C_AzeriteEmpoweredItem = C_AzeriteEmpoweredItem,
	C_ChatInfo = C_ChatInfo,	
	C_Map = C_Map,
    C_MountJournal = C_MountJournal,
	C_Timer = C_Timer,
	C_Item = C_Item,
	Enum = Enum,
	
    Dismount = Dismount,
	ItemLocation = ItemLocation,
	GetAddOnMetadata = GetAddOnMetadata,
	GetBuildInfo = GetBuildInfo,
	GetCursorPosition = GetCursorPosition,
	GetGossipOptions = GetGossipOptions,
	GetNumGossipOptions = GetNumGossipOptions,
	GetSkillLevel = GetSkillLevel,
	GetSkillLineInfo = GetSkillLineInfo,
	GetNumSkillLines = GetNumSkillLines,
	SelectGossipOption = function (...) lb.Unlock(SelectGossipOption, ...) end,
    GetNumQuestLogEntries = GetNumQuestLogEntries,
    GetQuestLogQuestText = GetQuestLogQuestText,
    GetQuestIDFromLogIndex = GetQuestIDFromLogIndex,
	GetLocale = GetLocale,
	GetTime = GetTime,
	GetNetStats = GetNetStats,
	GetInventorySlotInfo = GetInventorySlotInfo,
	GetWeaponEnchantInfo = GetWeaponEnchantInfo,
    InterfaceOptions_AddCategory = InterfaceOptions_AddCategory,
    IsIndoors = IsIndoors,
    IsOutdoors = IsOutdoors,
    PowerType = Enum.PowerType,
	UnitIsWildBattlePet = function (...) return lb.UnitTagHandler(UnitIsWildBattlePet, ...) end,
	AcceptProposal = function (...) return lb.Unlock(AcceptProposal, ...) end,
	GetCVar = GetCVar,
	SetCVar = SetCVar,
	UIErrorsFrame = UIErrorsFrame,
	mod = mod,
    CanLootUnit = CanLootUnit,
    ResetInstances = ResetInstances,
    SendChatMessage = SendChatMessage,

	-- Equipment API
	ContainerIDToInventoryID = ContainerIDToInventoryID,
	EquipCursorItem = EquipCursorItem,
    EquipItemByName = EquipItemByName,
	GetContainerItemInfo = GetContainerItemInfo,
	GetContainerItemLink = GetContainerItemLink,
	GetContainerFreeSlots = GetContainerFreeSlots,
	GetContainerNumFreeSlots = GetContainerNumFreeSlots,
	GetContainerNumSlots = GetContainerNumSlots,
	GetInventoryItemCooldown = GetInventoryItemCooldown,
	GetInventoryItemID = GetInventoryItemID,
	GetItemCooldown = GetItemCooldown,
	GetItemCount = GetItemCount,
	GetItemInfo = GetItemInfo,
	IsUsableInventory = IsUsableInventory,
	NUM_BAG_SLOTS = NUM_BAG_SLOTS,
	PickupContainerItem = PickupContainerItem,
	PickupInventoryItem = PickupInventoryItem,
    PickupMerchantItem = PickupMerchantItem,
	PutItemInBackpack = PutItemInBackpack,
	PutItemInBag = PutItemInBag,
	UseContainerItem = UseContainerItem,

	-- Talents API
	LearnTalent = LearnTalent,
	RemoveTalent = RemoveTalent,
	GetTalentInfo = GetTalentInfo,
	RAID_CLASS_COLORS = RAID_CLASS_COLORS,
	ITEM_QUALITY_COLORS = ITEM_QUALITY_COLORS,

	-- Pet Battles / Critters
	BATTLE_PET_NAME_5 = BATTLE_PET_NAME_5,
	PETTAME_NOTDEAD = PETTAME_NOTDEAD,
	SPELL_FAILED_NO_PET = SPELL_FAILED_NO_PET,
	ERR_ATTACK_DEAD = ERR_ATTACK_DEAD,
	PETTAME_DEAD = PETTAME_DEAD,
    -- Constants
	SPELL_FAILED_NOT_BEHIND = SPELL_FAILED_NOT_BEHIND,
	SPELL_FAILED_NO_MOUNTS_ALLOWED = SPELL_FAILED_NO_MOUNTS_ALLOWED,
	MINIMAP_TRACKING_MAILBOX = MINIMAP_TRACKING_MAILBOX,
	-- WoW UI API
	CreateFrame = CreateFrame,
	GameTooltip = GameTooltip,
	CreateMacro = CreateMacro,
	message = message,
	UIParent = UIParent,
	Enum = Enum,
	WorldFrame = WorldFrame,

    -- LuaBox API
    Lb = lb,
	UnlockedInteract = function (...) return lb.Unlock(lb.ObjectInteract, ...) end,
	WorldToScreen = function (wX, wY, wZ)
		local ResolutionCoef = WorldFrame:GetWidth() / lb.GetWindowSize()
		local sX, sY = lb.WorldToScreen(wX, wY, wZ)
		if sX and sY then
			return sX * ResolutionCoef, -sY * ResolutionCoef
		else
			return sX, sY
		end
	end,
    
	-- RealMobHealth
	assert = assert,
	GameTooltipStatusBar = GameTooltipStatusBar,
	hooksecurefunc = hooksecurefunc,
	IsInGuild = IsInGuild,
	NamePlateDriverFrame = NamePlateDriverFrame,
    TargetFrameHealthBar = TargetFrameHealthBar,
    TargetFrameTextureFrame = TargetFrameTextureFrame,
	TargetFrameManaBar = TargetFrameManaBar,
	TextStatusBar_Initialize = TextStatusBar_Initialize,
	TextStatusBar_OnValueChanged = TextStatusBar_OnValueChanged,
	TextStatusBar_UpdateTextString = TextStatusBar_UpdateTextString,
	TextStatusBar_UpdateTextStringWithValues = TextStatusBar_UpdateTextStringWithValues,
}
if setfenv == nil then return end
setfenv(1, Environment)

-- JSON Library with basic functionalities
-- string = json.encode(table)
-- table = json.decode(string)
local jsonParser
local json
do
	-- Module options:
	local always_try_using_lpeg = true
	local register_global_module_table = true
	local global_module_name = 'json'

	--[[
	David Kolf's JSON module for Lua 5.1/5.2

	Version 2.5


	For the documentation see the corresponding readme.txt or visit
	<http://dkolf.de/src/dkjson-lua.fsl/>.

	You can contact the author by sending an e-mail to 'david' at the
	domain 'dkolf.de'.


	Copyright (C) 2010-2013 David Heiko Kolf

	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:

	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
	BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	--]]

	-- Global dependencies
	local floor, huge = math.floor, math.huge
	local strrep, gsub, strsub, strbyte, strchar, strfind, strlen, strformat = string.rep, string.gsub, string.sub, string.byte, string.char, string.find, string.len, string.format
	local strmatch = string.match
	local concat = table.concat

	json = { version = "dkjson 2.5" }

	if register_global_module_table then
		jsonParser = json
	end

	local _ENV = nil -- blocking globals in Lua 5.2

	pcall(
		function()
			-- Enable access to blocked metatables.
			-- Don't worry, this module doesn't change anything in them.
			local debmeta = require "debug".getmetatable
			if debmeta then getmetatable = debmeta end
		end
	)

	json.null = setmetatable({}, { __tojson = function () return "null" end })

	local function isarray (tbl)
		local max, n, arraylen = 0, 0, 0
		for k,v in pairs(tbl) do
			if k == 'n' and type(v) == 'number' then
				arraylen = v
				if v > max then
					max = v
				end
			else
				if type(k) ~= 'number' or k < 1 or floor(k) ~= k then
					return false
				end
				if k > max then
					max = k
				end
				n = n + 1
			end
		end
		if max > 10 and max > arraylen and max > n * 2 then
			return false -- don't create an array with too many holes
		end
		return true, max
	end

	local escapecodes = { ["\""] = "\\\"", ["\\"] = "\\\\", ["\b"] = "\\b", ["\f"] = "\\f", ["\n"] = "\\n", ["\r"] = "\\r", ["\t"] = "\\t" }

	local function escapeutf8 (uchar)
		local value = escapecodes[uchar]
		if value then
			return value
		end
		local a, b, c, d = strbyte(uchar, 1, 4)
		a, b, c, d = a or 0, b or 0, c or 0, d or 0
		if a <= 0x7f then
			value = a
		elseif 0xc0 <= a and a <= 0xdf and b >= 0x80 then
			value = (a - 0xc0) * 0x40 + b - 0x80
		elseif 0xe0 <= a and a <= 0xef and b >= 0x80 and c >= 0x80 then
			value = ((a - 0xe0) * 0x40 + b - 0x80) * 0x40 + c - 0x80
		elseif 0xf0 <= a and a <= 0xf7 and b >= 0x80 and c >= 0x80 and d >= 0x80 then
			value = (((a - 0xf0) * 0x40 + b - 0x80) * 0x40 + c - 0x80) * 0x40 + d - 0x80
		else
			return ""
		end
		if value <= 0xffff then
			return strformat("\\u%.4x", value)
		elseif value <= 0x10ffff then
			-- encode as UTF-16 surrogate pair
			value = value - 0x10000
			local highsur, lowsur = 0xD800 + floor(value/0x400), 0xDC00 + (value % 0x400)
			return strformat("\\u%.4x\\u%.4x", highsur, lowsur)
		else
			return ""
		end
	end

	local function fsub (str, pattern, repl)
		-- gsub always builds a new string in a buffer, even when no match
		-- exists. First using find should be more efficient when most strings
		-- don't contain the pattern.
		if strfind(str, pattern) then
			return gsub(str, pattern, repl)
		else
			return str
		end
	end

	local function quotestring (value)
		-- based on the regexp "escapable" in https://github.com/douglascrockford/JSON-js
		value = fsub(value, "[%z\1-\31\"\\\127]", escapeutf8)
		if strfind(value, "[\194\216\220\225\226\239]") then
			value = fsub(value, "\194[\128-\159\173]", escapeutf8)
			value = fsub(value, "\216[\128-\132]", escapeutf8)
			value = fsub(value, "\220\143", escapeutf8)
			value = fsub(value, "\225\158[\180\181]", escapeutf8)
			value = fsub(value, "\226\128[\140-\143\168-\175]", escapeutf8)
			value = fsub(value, "\226\129[\160-\175]", escapeutf8)
			value = fsub(value, "\239\187\191", escapeutf8)
			value = fsub(value, "\239\191[\176-\191]", escapeutf8)
		end
		return "\"" .. value .. "\""
	end
	json.quotestring = quotestring

	local function replace(str, o, n)
		local i, j = strfind(str, o, 1, true)
		if i then
			return strsub(str, 1, i-1) .. n .. strsub(str, j+1, -1)
		else
			return str
		end
	end

	-- locale independent num2str and str2num functions
	local decpoint, numfilter

	local function updatedecpoint ()
		decpoint = strmatch(tostring(0.5), "([^05+])")
		-- build a filter that can be used to remove group separators
		numfilter = "[^0-9%-%+eE" .. gsub(decpoint, "[%^%$%(%)%%%.%[%]%*%+%-%?]", "%%%0") .. "]+"
	end

	updatedecpoint()

	local function num2str (num)
		return replace(fsub(tostring(num), numfilter, ""), decpoint, ".")
	end

	local function str2num (str)
		local num = tonumber(replace(str, ".", decpoint))
		if not num then
			updatedecpoint()
			num = tonumber(replace(str, ".", decpoint))
		end
		return num
	end

	local function addnewline2 (level, buffer, buflen)
		buffer[buflen+1] = "\n"
		buffer[buflen+2] = strrep("  ", level)
		buflen = buflen + 2
		return buflen
	end

	function json.addnewline (state)
		if state.indent then
			state.bufferlen = addnewline2(state.level or 0, state.buffer, state.bufferlen or #(state.buffer))
		end
	end

	local encode2 -- forward declaration

	local function addpair (key, value, prev, indent, level, buffer, buflen, tables, globalorder, state)
		local kt = type(key)
		if kt ~= 'string' and kt ~= 'number' then
			return nil, "type '" .. kt .. "' is not supported as a key by JSON."
		end
		if prev then
			buflen = buflen + 1
			buffer[buflen] = ","
		end
		if indent then
			buflen = addnewline2(level, buffer, buflen)
		end
		buffer[buflen+1] = quotestring(key)
		buffer[buflen+2] = ":"
		return encode2(value, indent, level, buffer, buflen + 2, tables, globalorder, state)
	end

	local function appendcustom(res, buffer, state)
		local buflen = state.bufferlen
		if type(res) == 'string' then
			buflen = buflen + 1
			buffer[buflen] = res
		end
		return buflen
	end

	local function exception(reason, value, state, buffer, buflen, defaultmessage)
		defaultmessage = defaultmessage or reason
		local handler = state.exception
		if not handler then
			return nil, defaultmessage
		else
			state.bufferlen = buflen
			local ret, msg = handler(reason, value, state, defaultmessage)
			if not ret then return nil, msg or defaultmessage end
			return appendcustom(ret, buffer, state)
		end
	end

	function json.encodeexception(reason, value, state, defaultmessage)
		return quotestring("<" .. defaultmessage .. ">")
	end

	encode2 = function (value, indent, level, buffer, buflen, tables, globalorder, state)
		local valtype = type(value)
		local valmeta = getmetatable(value)
		valmeta = type(valmeta) == 'table' and valmeta -- only tables
		local valtojson = valmeta and valmeta.__tojson
		if valtojson then
			if tables[value] then
				return exception('reference cycle', value, state, buffer, buflen)
			end
			tables[value] = true
			state.bufferlen = buflen
			local ret, msg = valtojson(value, state)
			if not ret then return exception('custom encoder failed', value, state, buffer, buflen, msg) end
			tables[value] = nil
			buflen = appendcustom(ret, buffer, state)
		elseif value == nil then
			buflen = buflen + 1
			buffer[buflen] = "null"
		elseif valtype == 'number' then
			local s
			if value ~= value or value >= huge or -value >= huge then
				-- This is the behaviour of the original JSON implementation.
				s = "null"
			else
				s = num2str(value)
			end
			buflen = buflen + 1
			buffer[buflen] = s
		elseif valtype == 'boolean' then
			buflen = buflen + 1
			buffer[buflen] = value and "true" or "false"
		elseif valtype == 'string' then
			buflen = buflen + 1
			buffer[buflen] = quotestring(value)
		elseif valtype == 'table' then
			if tables[value] then
				return exception('reference cycle', value, state, buffer, buflen)
			end
			tables[value] = true
			level = level + 1
			local isa, n = isarray(value)
			if n == 0 and valmeta and valmeta.__jsontype == 'object' then
				isa = false
			end
			local msg
			if isa then -- JSON array
				buflen = buflen + 1
				buffer[buflen] = "["
				for i = 1, n do
					buflen, msg = encode2(value[i], indent, level, buffer, buflen, tables, globalorder, state)
					if not buflen then return nil, msg end
					if i < n then
						buflen = buflen + 1
						buffer[buflen] = ","
					end
				end
				buflen = buflen + 1
				buffer[buflen] = "]"
			else -- JSON object
				local prev = false
				buflen = buflen + 1
				buffer[buflen] = "{"
				local order = valmeta and valmeta.__jsonorder or globalorder
				if order then
					local used = {}
					n = #order
					for i = 1, n do
						local k = order[i]
						local v = value[k]
						if v then
							used[k] = true
							buflen, msg = addpair(k, v, prev, indent, level, buffer, buflen, tables, globalorder, state)
							prev = true -- add a seperator before the next element
						end
					end
					for k,v in pairs(value) do
						if not used[k] then
							buflen, msg = addpair(k, v, prev, indent, level, buffer, buflen, tables, globalorder, state)
							if not buflen then return nil, msg end
							prev = true -- add a seperator before the next element
						end
					end
				else -- unordered
					for k,v in pairs(value) do
						buflen, msg = addpair(k, v, prev, indent, level, buffer, buflen, tables, globalorder, state)
						if not buflen then return nil, msg end
						prev = true -- add a seperator before the next element
					end
				end
				if indent then
					buflen = addnewline2(level - 1, buffer, buflen)
				end
				buflen = buflen + 1
				buffer[buflen] = "}"
			end
			tables[value] = nil
		else
			return exception('unsupported type', value, state, buffer, buflen, "type '" .. valtype .. "' is not supported by JSON.")
		end
		return buflen
	end

	function Travelight (value, state)
		state = state or {}
		local oldbuffer = state.buffer
		local buffer = oldbuffer or {}
		state.buffer = buffer
		updatedecpoint()
		local ret, msg = encode2(value, state.indent, state.level or 0, buffer, state.bufferlen or 0, state.tables or {}, state.keyorder, state)
		if not ret then
			error(msg, 2)
		elseif oldbuffer == buffer then
			state.bufferlen = ret
			return true
		else
			state.bufferlen = nil
			state.buffer = nil
			return concat(buffer)
		end
	end

	function json.encode (value, state)
		state = state or {}
		local oldbuffer = state.buffer
		local buffer = oldbuffer or {}
		state.buffer = buffer
		updatedecpoint()
		local ret, msg = encode2(value, state.indent, state.level or 0, buffer, state.bufferlen or 0, state.tables or {}, state.keyorder, state)
		if not ret then
			error(msg, 2)
		elseif oldbuffer == buffer then
			state.bufferlen = ret
			return true
		else
			state.bufferlen = nil
			state.buffer = nil
			return concat(buffer)
		end
	end

	local function loc (str, where)
		local line, pos, linepos = 1, 1, 0
		while true do
			pos = strfind(str, "\n", pos, true)
			if pos and pos < where then
				line = line + 1
				linepos = pos
				pos = pos + 1
			else
				break
			end
		end
		return "line " .. line .. ", column " .. (where - linepos)
	end

	local function unterminated (str, what, where)
		return nil, strlen(str) + 1, "unterminated " .. what .. " at " .. loc(str, where)
	end

	local function scanwhite (str, pos)
		while true do
			pos = strfind(str, "%S", pos)
			if not pos then return nil end
			local sub2 = strsub(str, pos, pos + 1)
			if sub2 == "\239\187" and strsub(str, pos + 2, pos + 2) == "\191" then
				-- UTF-8 Byte Order Mark
				pos = pos + 3
			elseif sub2 == "//" then
				pos = strfind(str, "[\n\r]", pos + 2)
				if not pos then return nil end
			elseif sub2 == "/*" then
				pos = strfind(str, "*/", pos + 2)
				if not pos then return nil end
				pos = pos + 2
			else
				return pos
			end
		end
	end

	local escapechars = {
		["\""] = "\"", ["\\"] = "\\", ["/"] = "/", ["b"] = "\b", ["f"] = "\f",
		["n"] = "\n", ["r"] = "\r", ["t"] = "\t"
	}

	local function unichar (value)
		if value < 0 then
			return nil
		elseif value <= 0x007f then
			return strchar(value)
		elseif value <= 0x07ff then
			return strchar(0xc0 + floor(value/0x40), 0x80 + (floor(value) % 0x40))
		elseif value <= 0xffff then
			return strchar(0xe0 + floor(value/0x1000), 0x80 + (floor(value/0x40) % 0x40), 0x80 + (floor(value) % 0x40))
		elseif value <= 0x10ffff then
			return strchar(0xf0 + floor(value/0x40000), 0x80 + (floor(value/0x1000) % 0x40), 0x80 + (floor(value/0x40) % 0x40), 0x80 + (floor(value) % 0x40))
		else
			return nil
		end
	end

	local function scanstring (str, pos)
		local lastpos = pos + 1
		local buffer, n = {}, 0
		while true do
			local nextpos = strfind(str, "[\"\\]", lastpos)
			if not nextpos then
				return unterminated(str, "string", pos)
			end
			if nextpos > lastpos then
				n = n + 1
				buffer[n] = strsub(str, lastpos, nextpos - 1)
			end
			if strsub(str, nextpos, nextpos) == "\"" then
				lastpos = nextpos + 1
				break
			else
				local escchar = strsub(str, nextpos + 1, nextpos + 1)
				local value
				if escchar == "u" then
					value = tonumber(strsub(str, nextpos + 2, nextpos + 5), 16)
					if value then
						local value2
						if 0xD800 <= value and value <= 0xDBff then
							-- we have the high surrogate of UTF-16. Check if there is a
							-- low surrogate escaped nearby to combine them.
							if strsub(str, nextpos + 6, nextpos + 7) == "\\u" then
								value2 = tonumber(strsub(str, nextpos + 8, nextpos + 11), 16)
								if value2 and 0xDC00 <= value2 and value2 <= 0xDFFF then
									value = (value - 0xD800)	* 0x400 + (value2 - 0xDC00) + 0x10000
								else
									value2 = nil -- in case it was out of range for a low surrogate
								end
							end
						end
						value = value and unichar(value)
						if value then
							if value2 then
								lastpos = nextpos + 12
							else
								lastpos = nextpos + 6
							end
						end
					end
				end
				if not value then
					value = escapechars[escchar] or escchar
					lastpos = nextpos + 2
				end
				n = n + 1
				buffer[n] = value
			end
		end
		if n == 1 then
			return buffer[1], lastpos
		elseif n > 1 then
			return concat(buffer), lastpos
		else
			return "", lastpos
		end
	end

	local scanvalue -- forward declaration

	local function scantable (what, closechar, str, startpos, nullval, objectmeta, arraymeta)
		local len = strlen(str)
		local tbl, n = {}, 0
		local pos = startpos + 1
		if what == 'object' then
			setmetatable(tbl, objectmeta)
		else
			setmetatable(tbl, arraymeta)
		end
		while true do
			pos = scanwhite(str, pos)
			if not pos then return unterminated(str, what, startpos) end
			local char = strsub(str, pos, pos)
			if char == closechar then
				return tbl, pos + 1
			end
			local val1, err
			val1, pos, err = scanvalue(str, pos, nullval, objectmeta, arraymeta)
			if err then return nil, pos, err end
			pos = scanwhite(str, pos)
			if not pos then return unterminated(str, what, startpos) end
			char = strsub(str, pos, pos)
			if char == ":" then
				if val1 == nil then
					return nil, pos, "cannot use nil as table index (at " .. loc(str, pos) .. ")"
				end
				pos = scanwhite(str, pos + 1)
				if not pos then return unterminated(str, what, startpos) end
				local val2
				val2, pos, err = scanvalue(str, pos, nullval, objectmeta, arraymeta)
				if err then return nil, pos, err end
				tbl[val1] = val2
				pos = scanwhite(str, pos)
				if not pos then return unterminated(str, what, startpos) end
				char = strsub(str, pos, pos)
			else
				n = n + 1
				tbl[n] = val1
			end
			if char == "," then
				pos = pos + 1
			end
		end
	end

	scanvalue = function (str, pos, nullval, objectmeta, arraymeta)
		pos = pos or 1
		pos = scanwhite(str, pos)
		if not pos then
			return nil, strlen(str) + 1, "no valid JSON value (reached the end)"
		end
		local char = strsub(str, pos, pos)
		if char == "{" then
			return scantable('object', "}", str, pos, nullval, objectmeta, arraymeta)
		elseif char == "[" then
			return scantable('array', "]", str, pos, nullval, objectmeta, arraymeta)
		elseif char == "\"" then
			return scanstring(str, pos)
		else
			local pstart, pend = strfind(str, "^%-?[%d%.]+[eE]?[%+%-]?%d*", pos)
			if pstart then
				local number = str2num(strsub(str, pstart, pend))
				if number then
					return number, pend + 1
				end
			end
			pstart, pend = strfind(str, "^%a%w*", pos)
			if pstart then
				local name = strsub(str, pstart, pend)
				if name == "true" then
					return true, pend + 1
				elseif name == "false" then
					return false, pend + 1
				elseif name == "null" then
					return nullval, pend + 1
				end
			end
			return nil, pos, "no valid JSON value at " .. loc(str, pos)
		end
	end

	local function optionalmetatables(...)
		if select("#", ...) > 0 then
			return ...
		else
			return {__jsontype = 'object'}, {__jsontype = 'array'}
		end
	end

	function json.decode (str, pos, nullval, ...)
		local objectmeta, arraymeta = optionalmetatables(...)
		return scanvalue(str, pos, nullval, objectmeta, arraymeta)
	end

	function json.use_lpeg ()
		local g = require("lpeg")

		if g.version() == "0.11" then
			error "due to a bug in LPeg 0.11, it cannot be used for JSON matching"
		end

		local pegmatch = g.match
		local P, S, R = g.P, g.S, g.R

		local function ErrorCall (str, pos, msg, state)
			if not state.msg then
				state.msg = msg .. " at " .. loc(str, pos)
				state.pos = pos
			end
			return false
		end

		local function Err (msg)
			return g.Cmt(g.Cc(msg) * g.Carg(2), ErrorCall)
		end

		local SingleLineComment = P"//" * (1 - S"\n\r")^0
		local MultiLineComment = P"/*" * (1 - P"*/")^0 * P"*/"
		local Space = (S" \n\r\t" + P"\239\187\191" + SingleLineComment + MultiLineComment)^0

		local PlainChar = 1 - S"\"\\\n\r"
		local EscapeSequence = (P"\\" * g.C(S"\"\\/bfnrt" + Err "unsupported escape sequence")) / escapechars
		local HexDigit = R("09", "af", "AF")
		local function UTF16Surrogate (match, pos, high, low)
			high, low = tonumber(high, 16), tonumber(low, 16)
			if 0xD800 <= high and high <= 0xDBff and 0xDC00 <= low and low <= 0xDFFF then
				return true, unichar((high - 0xD800)	* 0x400 + (low - 0xDC00) + 0x10000)
			else
				return false
			end
		end
		local function UTF16BMP (hex)
			return unichar(tonumber(hex, 16))
		end
		local U16Sequence = (P"\\u" * g.C(HexDigit * HexDigit * HexDigit * HexDigit))
		local UnicodeEscape = g.Cmt(U16Sequence * U16Sequence, UTF16Surrogate) + U16Sequence/UTF16BMP
		local Char = UnicodeEscape + EscapeSequence + PlainChar
		local String = P"\"" * g.Cs(Char ^ 0) * (P"\"" + Err "unterminated string")
		local Integer = P"-"^(-1) * (P"0" + (R"19" * R"09"^0))
		local Fractal = P"." * R"09"^0
		local Exponent = (S"eE") * (S"+-")^(-1) * R"09"^1
		local Number = (Integer * Fractal^(-1) * Exponent^(-1))/str2num
		local Constant = P"true" * g.Cc(true) + P"false" * g.Cc(false) + P"null" * g.Carg(1)
		local SimpleValue = Number + String + Constant
		local ArrayContent, ObjectContent

		-- The functions parsearray and parseobject parse only a single value/pair
		-- at a time and store them directly to avoid hitting the LPeg limits.
		local function parsearray (str, pos, nullval, state)
			local obj, cont
			local npos
			local t, nt = {}, 0
			repeat
				obj, cont, npos = pegmatch(ArrayContent, str, pos, nullval, state)
				if not npos then break end
				pos = npos
				nt = nt + 1
				t[nt] = obj
			until cont == 'last'
			return pos, setmetatable(t, state.arraymeta)
		end

		local function parseobject (str, pos, nullval, state)
			local obj, key, cont
			local npos
			local t = {}
			repeat
				key, obj, cont, npos = pegmatch(ObjectContent, str, pos, nullval, state)
				if not npos then break end
				pos = npos
				t[key] = obj
			until cont == 'last'
			return pos, setmetatable(t, state.objectmeta)
		end

		local Array = P"[" * g.Cmt(g.Carg(1) * g.Carg(2), parsearray) * Space * (P"]" + Err "']' expected")
		local Object = P"{" * g.Cmt(g.Carg(1) * g.Carg(2), parseobject) * Space * (P"}" + Err "'}' expected")
		local Value = Space * (Array + Object + SimpleValue)
		local ExpectedValue = Value + Space * Err "value expected"
		ArrayContent = Value * Space * (P"," * g.Cc'cont' + g.Cc'last') * g.Cp()
		local Pair = g.Cg(Space * String * Space * (P":" + Err "colon expected") * ExpectedValue)
		ObjectContent = Pair * Space * (P"," * g.Cc'cont' + g.Cc'last') * g.Cp()
		local DecodeValue = ExpectedValue * g.Cp()

		function json.decode (str, pos, nullval, ...)
			local state = {}
			state.objectmeta, state.arraymeta = optionalmetatables(...)
			local obj, retpos = pegmatch(DecodeValue, str, pos, nullval, state)
			if state.msg then
				return nil, state.pos, state.msg
			else
				return obj, retpos
			end
		end

		-- use this function only once:
		json.use_lpeg = function () return json end

		json.using_lpeg = true

		return json -- so you can get the module using json = require "dkjson".use_lpeg()
	end

	if always_try_using_lpeg then
		pcall(json.use_lpeg)
	end

end
