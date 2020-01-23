declare var Java: any;
import {Objective} from '../../../org/bukkit/scoreboard/Objective.js'
import {RenderType} from '../../../org/bukkit/scoreboard/RenderType.js'
import {Team} from '../../../org/bukkit/scoreboard/Team.js'
import {DisplaySlot} from '../../../org/bukkit/scoreboard/DisplaySlot.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'

export interface Scoreboard {
	getEntries(): any;
	getPlayers(): any;
	getObjectivesByCriteria(criteria: string): any;
	registerNewObjective(_name: string, criteria: string): Objective;
	registerNewObjective(_name: string, criteria: string, displayName: string, renderType: RenderType): Objective;
	registerNewObjective(_name: string, criteria: string, displayName: string): Objective;
	getTeam(teamName: string): Team;
	getEntryTeam(entry: string): Team;
	clearSlot(slot: DisplaySlot): void;
	getScores(player: OfflinePlayer): any;
	getScores(entry: string): any;
	getObjective(slot: DisplaySlot): Objective;
	getObjective(_name: string): Objective;
	getPlayerTeam(player: OfflinePlayer): Team;
	getTeams(): any;
	resetScores(player: OfflinePlayer): void;
	resetScores(entry: string): void;
	getObjectives(): any;
	registerNewTeam(_name: string): Team;
}

export class Scoreboard {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Scoreboard');
	}
}

