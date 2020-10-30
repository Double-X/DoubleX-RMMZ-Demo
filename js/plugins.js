// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"DoubleX RMMZ Enhanced Codebase","status":true,"description":"Versions: { codebase: \"1.0.2\", plugin: \"v0.00a\" }\r\nFixes bugs, improves codebase quality, boosts performance and gives new APIs","parameters":{"rngPartNum":"10"}},
{"name":"DoubleX_RMMZ_Auto_Battle_Command","status":true,"description":"Versions: { codebase: \"1.0.2\", plugin: \"v1.00a\" }\r\nAdds a party command to add an autobattle state to the party in battles","parameters":{"stateId":"33","text":"Auto Battle","canUse":"true"}},
{"name":"DoubleX_RMMZ_Custom_Key_Maps","status":true,"description":"Versions: { codebase: \"1.0.2\", plugin: \"v1.00a\" }\r\nLets you use more keys in the keyboard for RMMZ by setting the key maps","parameters":{"keyMaps":"[\"{\\\"keyCode\\\":\\\"Digit1\\\",\\\"keyName\\\":\\\"#1\\\"}\",\"{\\\"keyCode\\\":\\\"Digit2\\\",\\\"keyName\\\":\\\"#2\\\"}\",\"{\\\"keyCode\\\":\\\"Digit3\\\",\\\"keyName\\\":\\\"#3\\\"}\",\"{\\\"keyCode\\\":\\\"Digit4\\\",\\\"keyName\\\":\\\"#4\\\"}\",\"{\\\"keyCode\\\":\\\"Digit5\\\",\\\"keyName\\\":\\\"#5\\\"}\",\"{\\\"keyCode\\\":\\\"Digit6\\\",\\\"keyName\\\":\\\"#6\\\"}\",\"{\\\"keyCode\\\":\\\"Digit7\\\",\\\"keyName\\\":\\\"#7\\\"}\",\"{\\\"keyCode\\\":\\\"Digit8\\\",\\\"keyName\\\":\\\"#8\\\"}\",\"{\\\"keyCode\\\":\\\"Digit9\\\",\\\"keyName\\\":\\\"#9\\\"}\",\"{\\\"keyCode\\\":\\\"Digit0\\\",\\\"keyName\\\":\\\"#0\\\"}\",\"{\\\"keyCode\\\":\\\"F1\\\",\\\"keyName\\\":\\\"#F1\\\"}\",\"{\\\"keyCode\\\":\\\"F3\\\",\\\"keyName\\\":\\\"#F3\\\"}\"]"}},
{"name":"DoubleX_RMMZ_Confusion_Edit","status":true,"description":"Versions: { codebase: \"1.0.2\", plugin: \"v1.00a\" }\r\nLets you set some confusion states to not be restricted to attacks only","parameters":{}},
{"name":"DoubleX_RMMZ_Custom_Script_Calls","status":true,"description":"Versions: { codebase: \"1.0.2\", plugin: \"v1.00a\" }\r\nLets you set new script calls as old ones with some arguments bound","parameters":{"newScriptCalls":"[\"{\\\"newScriptCallFullName\\\":\\\"ssicp\\\",\\\"origScriptCallFullName\\\":\\\"$gameSystem.setSkillItemCooldownParam\\\",\\\"origScriptCallContext\\\":\\\"\\\",\\\"scriptCallArgVals\\\":\\\"[\\\\\\\"{\\\\\\\\\\\\\\\"argI\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"argVal\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"'battlerNotetagDataTypePriorities'\\\\\\\\\\\\\\\"}\\\\\\\"]\\\"}\",\"{\\\"newScriptCallFullName\\\":\\\"Game_Battler.prototype.clearSkillItemCooldown\\\",\\\"origScriptCallFullName\\\":\\\"this.setSkillItemCooldown\\\",\\\"origScriptCallContext\\\":\\\"\\\",\\\"scriptCallArgVals\\\":\\\"[\\\\\\\"{\\\\\\\\\\\\\\\"argI\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"argVal\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\"}\\\\\\\"]\\\"}\"]"}},
{"name":"DoubleX RMMZ Dynamic Data","status":true,"description":"Versions: { codebase: \"1.0.0\", plugin: \"v1.00a\" }\r\nLets you edit some database data on the fly and such edits will be saved","parameters":{}},
{"name":"DoubleX_RMMZ_Event_Properties","status":true,"description":"Versions: { codebase: \"1.0.2\", plugin: \"v1.00a\" }\r\nLets other plugins use RMMZ plugin commands as individual event notetags","parameters":{}},
{"name":"DoubleX_RMMZ_Permanent_States","status":true,"description":"Versions: { codebase: \"1.0.2\", plugin: \"v1.00a\" }\r\nLets you set some states to persist after the battler's dead and revived","parameters":{}},
{"name":"DoubleX RMMZ Plugin Command Lines","status":true,"description":"Versions: { codebase: \"1.0.0\", plugin: \"v1.02a\" }\r\nLets you use plugin commands in the RMMV styles by typing them as scripts","parameters":{"pluginFileCmds":"[\"{\\\"pluginFilename\\\":\\\"DoubleX RMMZ Skill Item Cooldown\\\",\\\"pluginCmds\\\":\\\"[\\\\\\\"{\\\\\\\\\\\\\\\"cmdName\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"setSkillItemCooldown\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"argNames\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"[\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"side\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"label\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"type\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"id\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"turnCount\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"]\\\\\\\\\\\\\\\"}\\\\\\\"]\\\"}\",\"{\\\"pluginFilename\\\":\\\"DoubleX RMMZ Skill Item Triggers\\\",\\\"pluginCmds\\\":\\\"[\\\\\\\"{\\\\\\\\\\\\\\\"cmdName\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"setSkillItemTriggersParam\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"argNames\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"[\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"param\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"val\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"]\\\\\\\\\\\\\\\"}\\\\\\\"]\\\"}\"]","newPluginFileCmds":"[\"{\\\"pluginFilename\\\":\\\"DoubleX RMMZ Skill Item Cooldown\\\",\\\"newPluginCmds\\\":\\\"[\\\\\\\"{\\\\\\\\\\\\\\\"newCmdName\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"ssicA1S\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"origCmdName\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"setSkillItemCooldown\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"cmdArgNameVals\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"[\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"{\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"argName\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"side\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"argVal\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"actor\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"{\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"argName\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"label\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"argVal\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"{\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"argName\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"type\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"argVal\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"skill\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"]\\\\\\\\\\\\\\\"}\\\\\\\"]\\\"}\"]"}},
{"name":"DoubleX_RMMZ_Plugin_Query","status":true,"description":"Versions: { codebase: \"1.0.2\", plugin: \"v1.00a\" }\r\nLets you use plugin queries in conditional branch and control variables","parameters":{"newDamageFormulaPluginQueries":"[\"{\\\"name\\\":\\\"atkDmg\\\",\\\"args\\\":\\\"[]\\\",\\\"funcContents\\\":\\\"\\\\\\\"return a.atk * 4 - b.def * 2;\\\\\\\"\\\"}\",\"{\\\"name\\\":\\\"matDmg\\\",\\\"args\\\":\\\"[\\\\\\\"baseDmg\\\\\\\"]\\\",\\\"funcContents\\\":\\\"\\\\\\\"return +baseDmg + a.mat * 2 - b.mdf * 2;\\\\\\\"\\\"}\"]","newEventCmdPluginQueries":"[\"{\\\"name\\\":\\\"actorTpbChargeTime\\\",\\\"args\\\":\\\"[\\\\\\\"actorId\\\\\\\"]\\\",\\\"funcContents\\\":\\\"\\\\\\\"return $gameActors.actor(+actorId).tpbChargeTime();\\\\\\\"\\\"}\",\"{\\\"name\\\":\\\"enemyTpbChargeTime\\\",\\\"args\\\":\\\"[\\\\\\\"enemyIndex\\\\\\\"]\\\",\\\"funcContents\\\":\\\"\\\\\\\"return $gameTroop.members(+enemyIndex).tpbChargeTime();\\\\\\\"\\\"}\",\"{\\\"name\\\":\\\"actorTpbCastTime\\\",\\\"args\\\":\\\"[\\\\\\\"actorId\\\\\\\"]\\\",\\\"funcContents\\\":\\\"\\\\\\\"return $gameActors.actor(+actorId)._tpbCastTime;\\\\\\\"\\\"}\",\"{\\\"name\\\":\\\"enemyTpbCastTime\\\",\\\"args\\\":\\\"[\\\\\\\"enemyIndex\\\\\\\"]\\\",\\\"funcContents\\\":\\\"\\\\\\\"return $gameTroop.members(+enemyIndex)._tpbCastTime;\\\\\\\"\\\"}\"]"}},
{"name":"DoubleX RMMZ Unit Filters","status":true,"description":"Versions: { codebase: \"1.0.0\", plugin: \"v1.01a\" }\r\nLets you use script calls to filter unit members with less codes and eventing","parameters":{}},
{"name":"DoubleX_RMMZ_Script_Call_Hotkeys","status":true,"description":"Versions: { codebase: \"1.0.2\", plugin: \"v1.00a\" }\r\nLets you set some hotkeys per scene to trigger some script calls","parameters":{"scriptCallHotkeys":"[\"{\\\"scene\\\":\\\"Scene_Map\\\",\\\"hotkeys\\\":\\\"[\\\\\\\"{\\\\\\\\\\\\\\\"hotkey\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"#F1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"scriptCalls\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"if ($gameMessage.isBusy()) return;\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n$gameSystem.setSavefileId(1);\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n$gameSystem.onBeforeSave();\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nDataManager.saveGame(1).then(() => {\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n    SoundManager.playSave();\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n    $gameMessage.add(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Quick save on slot 1 succeeded!\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n}).catch(() => {\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n    SoundManager.playBuzzer();\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n    $gameMessage.add(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Quick save on slot 1 failed!\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n});\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"{\\\\\\\\\\\\\\\"hotkey\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"#F3\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"scriptCalls\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"if ($gameMessage.isBusy()) return;\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n$dataSystem.battleSystem++;\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n$dataSystem.battleSystem %= 3;\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nconst sys = $dataSystem.battleSystem;\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n$gameMessage.add(`The battle system is now ${\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nsys === 0 ? \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"turn based\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\" : `${\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nsys === 1 ? \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"active\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\" : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"wait\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n} TPB`\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n}`)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}\\\\\\\"]\\\"}\"]"}},
{"name":"DoubleX RMMZ Skill Item Cooldown","status":true,"description":"Versions: { codebase: \"1.0.0\", plugin: \"v1.00a\" }\r\nLets you set some skills/items to have battler and skill/item cooldowns","parameters":{"clearBattlerSkillItemCooldownOnBattleStart":"\"actor.clearBattlerSkillItemCooldowns();\"","clearBattlerSkillItemCooldownOnBattleEnd":"\"actor.clearBattlerSkillItemCooldowns();\"","battlerNotetagDataTypePriorities":"[\"latestSkillItem\",\"states\",\"enemy\",\"armors\",\"weapons\",\"class\",\"actor\"]","skillItemNotetagDataTypePriorities":"[\"latestSkillItem\",\"states\",\"enemy\",\"armors\",\"weapons\",\"class\",\"actor\"]"}},
{"name":"DoubleX RMMZ Skill Item Triggers","status":true,"description":"Versions: { codebase: \"1.0.0\", plugin: \"v1.00a\" }\r\nLets you run some codes set by your notetags on some action execution cases","parameters":{"missNotetagDataTypePriorities":"[\"latestSkillItem\"]","evaNotetagDataTypePriorities":"[\"latestSkillItem\"]","cntNotetagDataTypePriorities":"[\"latestSkillItem\"]","mrfNotetagDataTypePriorities":"[\"latestSkillItem\"]","criNotetagDataTypePriorities":"[\"latestSkillItem\"]","normNotetagDataTypePriorities":"[\"latestSkillItem\"]","substituteNotetagDataTypePriorities":"[\"latestSkillItem\"]","preNotetagDataTypePriorities":"[\"latestSkillItem\"]","postNotetagDataTypePriorities":"[\"latestSkillItem\"]"}},
{"name":"DoubleX_RMMZ_TPBS_Countdown_States","status":true,"description":"Versions: { codebase: \"1.1.0\", plugin: \"v1.00a\" }\r\nLets you set some states to update its turn after some seconds in TPBS","parameters":{}},
{"name":"DoubleX RMMZ State Triggers","status":true,"description":"Versions: { codebase: \"1.0.0\", plugin: \"v1.00a\" }\r\nLets you run some codes set by your notetags on some important state timings","parameters":{"addNotetagDataTypePriorities":"[\"thisState\"]","removeNotetagDataTypePriorities":"[\"thisState\"]","resetNotetagDataTypePriorities":"[\"thisState\"]","expireNotetagDataTypePriorities":"[\"thisState\"]","turnNotetagDataTypePriorities":"[\"thisState\"]"}},
{"name":"DoubleX RMMZ Targeting AI","status":true,"description":"Versions: { codebase: \"1.0.0\", plugin: \"v1.00a\" }\r\nLets you control some skills/items target selection AI behaviors by notetags","parameters":{"notetagDataTypePriorities":"[\"latestSkillItem\",\"states\",\"enemy\",\"armors\",\"weapons\",\"class\",\"actor\"]"}},
{"name":"DoubleX_RMMZ_Targeting_Hotkeys","status":true,"description":"Versions: { codebase: \"1.0.2\", plugin: \"v1.00a\" }\r\nLets you set some hotkeys to select skill/item targets","parameters":{"hotkeys":"[\"{\\\"targetIndex\\\":\\\"0\\\",\\\"targetHotkey\\\":\\\"#1\\\"}\",\"{\\\"targetIndex\\\":\\\"1\\\",\\\"targetHotkey\\\":\\\"#2\\\"}\",\"{\\\"targetIndex\\\":\\\"2\\\",\\\"targetHotkey\\\":\\\"#3\\\"}\",\"{\\\"targetIndex\\\":\\\"3\\\",\\\"targetHotkey\\\":\\\"#4\\\"}\",\"{\\\"targetIndex\\\":\\\"4\\\",\\\"targetHotkey\\\":\\\"#5\\\"}\",\"{\\\"targetIndex\\\":\\\"5\\\",\\\"targetHotkey\\\":\\\"#6\\\"}\",\"{\\\"targetIndex\\\":\\\"6\\\",\\\"targetHotkey\\\":\\\"#7\\\"}\",\"{\\\"targetIndex\\\":\\\"7\\\",\\\"targetHotkey\\\":\\\"#8\\\"}\"]"}},
{"name":"DoubleX_RMMZ_TPBS_Actor_Hotkeys","status":true,"description":"Versions: { codebase: \"1.1.0\", plugin: \"v1.00a\" }\r\nLets you set some custom hotkeys to select some inputable actors in TPBS","parameters":{"prevHotkey":"left","nextHotkey":"right","indexHotkeys":"[\"{\\\"actorIndex\\\":\\\"0\\\",\\\"actorHotkey\\\":\\\"#1\\\"}\",\"{\\\"actorIndex\\\":\\\"1\\\",\\\"actorHotkey\\\":\\\"#2\\\"}\",\"{\\\"actorIndex\\\":\\\"2\\\",\\\"actorHotkey\\\":\\\"#3\\\"}\",\"{\\\"actorIndex\\\":\\\"3\\\",\\\"actorHotkey\\\":\\\"#4\\\"}\"]"}},
{"name":"DoubleX_RMMZ_TPBS_Battle_Turns","status":true,"description":"Versions: { codebase: \"1.1.0\", plugin: \"v1.00a\" }\r\nLets you set a TPBS battle turn as number of seconds or actions executed","parameters":{"def":"act","secNum":"4.000000000","actNum":"2"}},
{"name":"DoubleX RMMZ TPBS Configurations Edit","status":true,"description":"Versions: { codebase: \"1.0.0\", plugin: \"v1.00a\" }\r\nLets you change some effectively hardcoded TPBS configurations on the fly","parameters":{"Battler":"","tpbAcceleration":"\"const speed = this.tpbRelativeSpeed();\\nconst referenceTime = $gameParty.tpbReferenceTime();\\nreturn speed / referenceTime;\"","tpbRelativeSpeed":"\"return this.tpbSpeed() / $gameParty.tpbBaseSpeed();\"","tpbSpeed":"\"return Math.sqrt(this.agi) + 1;\"","tpbBaseSpeed":"\"return Math.sqrt(this.paramBasePlus(6)) + 1;\"","tpbRequiredCastTime":"\"const MZ_EC = DoubleX_RMMZ.Enhanced_Codebase;\\nconst _tpbCastDelay = MZ_EC.Game_Battler.new._tpbCastDelay;\\nreturn Math.sqrt(_tpbCastDelay.call(this)) / this.tpbSpeed();\"","tpbChargeTimeWithPenalty":"\"return this._tpbChargeTime - 1;\"","updatedTpbChargeTime":"\"return this._tpbChargeTime + this.tpbAcceleration();\"","updatedTpbCastTime":"\"return this._tpbCastTime + this.tpbAcceleration();\"","updatedTpbIdleTime":"\"return this._tpbIdleTime + this.tpbAcceleration();\"","tpbCastDelay":"\"return this._actions.filterMap(act => {\\n    return act.isValid();\\n}, act => act.item()).reduce((delay, { speed }) => {\\n    return delay + Math.max(0, -speed);\\n}, 0);\"","advantageousStartTpbChargeTime":"\"return 1;\"","disadvantageousStartTpbChargeTime":"\"return 0;\"","normStartTpbChargeTime":"\"return this.tpbRelativeSpeed() * Math.random() * 0.5;\"","NotetagDataTypePriorities":"","tpbAccelerationNotetagDataTypePriorities":"[\"latestSkillItem\",\"states\",\"enemy\",\"armors\",\"weapons\",\"class\",\"actor\"]","tpbRelativeSpeedNotetagDataTypePriorities":"[\"latestSkillItem\",\"states\",\"enemy\",\"armors\",\"weapons\",\"class\",\"actor\"]","tpbSpeedNotetagDataTypePriorities":"[\"latestSkillItem\",\"states\",\"enemy\",\"armors\",\"weapons\",\"class\",\"actor\"]","tpbBaseSpeedNotetagDataTypePriorities":"[\"latestSkillItem\",\"states\",\"enemy\",\"armors\",\"weapons\",\"class\",\"actor\"]","tpbRequiredCastTimeNotetagDataTypePriorities":"[\"latestSkillItem\",\"states\",\"enemy\",\"armors\",\"weapons\",\"class\",\"actor\"]","tpbChargeTimeWithPenaltyNotetagDataTypePriorities":"[\"latestSkillItem\",\"states\",\"enemy\",\"armors\",\"weapons\",\"class\",\"actor\"]","updatedTpbChargeTimeNotetagDataTypePriorities":"[\"latestSkillItem\",\"states\",\"enemy\",\"armors\",\"weapons\",\"class\",\"actor\"]","updatedTpbCastTimeNotetagDataTypePriorities":"[\"latestSkillItem\",\"states\",\"enemy\",\"armors\",\"weapons\",\"class\",\"actor\"]","updatedTpbIdleTimeNotetagDataTypePriorities":"[\"latestSkillItem\",\"states\",\"enemy\",\"armors\",\"weapons\",\"class\",\"actor\"]","tpbCastDelayNotetagDataTypePriorities":"[\"latestSkillItem\",\"states\",\"enemy\",\"armors\",\"weapons\",\"class\",\"actor\"]","advantageousStartTpbChargeTimeNotetagDataTypePriorities":"[\"latestSkillItem\",\"states\",\"enemy\",\"armors\",\"weapons\",\"class\",\"actor\"]","disadvantageousStartTpbChargeTimeNotetagDataTypePriorities":"[\"latestSkillItem\",\"states\",\"enemy\",\"armors\",\"weapons\",\"class\",\"actor\"]","normStartTpbChargeTimeNotetagDataTypePriorities":"[\"latestSkillItem\",\"states\",\"enemy\",\"armors\",\"weapons\",\"class\",\"actor\"]","Unit":"","unitTPBBaseSpeed":"\"return Math.max(...this.members().map(mem => {\\n    return mem.tpbBaseSpeed();\\n}));\"","unitTPBReferenceTime":"\"const fps = Graphics.gameFps;\\nreturn BattleManager.isActiveTpb() ? 4 * fps : fps;\"","Troop":"","isTroopTpbTurnEnd":"\"return Math.max(...this.members().map(mem => {\\n    return mem.turnCount();\\n})) > this._turnCount;\""}},
{"name":"DoubleX_RMMZ_TPBS_CTB","status":true,"description":"Versions: { codebase: \"1.0.2\", plugin: \"v1.00a\" }\r\nAdds a party command to add an autobattle state to the party in battles","parameters":{"isCTB":"true"}}
];
