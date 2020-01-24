declare var Java: any;
import {Objective} from '../../../org/bukkit/scoreboard/Objective.js'
import {DisplaySlot} from '../../../org/bukkit/scoreboard/DisplaySlot.js'
import {Team} from '../../../org/bukkit/scoreboard/Team.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {RenderType} from '../../../org/bukkit/scoreboard/RenderType.js'

export interface Scoreboard {
	getEntries(): any;
	getPlayers(): any;
	getTeams(): any;
	getObjective(slot: DisplaySlot): Objective;
	getObjective(_name: string): Objective;
	registerNewTeam(_name: string): Team;
	resetScores(entry: string): void;
	resetScores(player: OfflinePlayer): void;
	getPlayerTeam(player: OfflinePlayer): Team;
	getTeam(teamName: string): Team;
	getObjectives(): any;
	getScores(entry: string): any;
	getScores(player: OfflinePlayer): any;
	clearSlot(slot: DisplaySlot): void;
	getEntryTeam(entry: string): Team;
	registerNewObjective(_name: string, criteria: string, displayName: string): Objective;
	registerNewObjective(_name: string, criteria: string): Objective;
	registerNewObjective(_name: string, criteria: string, displayName: string, renderType: RenderType): Objective;
	getObjectivesByCriteria(criteria: string): any;
}

export class Scoreboard {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Scoreboard');
	}
}

