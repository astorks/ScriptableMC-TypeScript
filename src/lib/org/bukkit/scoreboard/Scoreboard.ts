declare var Java: any;
import DisplaySlot from './DisplaySlot.js'
import Objective from './Objective.js'
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js'
import RenderType from './RenderType.js'
import Team from './Team.js'

export default interface Scoreboard {
	clearSlot(arg0: DisplaySlot): void;
	getEntries(): any;
	getEntryTeam(arg0: string): Team;
	getObjective(arg0: string): Objective;
	getObjective(arg0: DisplaySlot): Objective;
	getObjectives(): any;
	getObjectivesByCriteria(arg0: string): any;
	getPlayerTeam(arg0: OfflinePlayer): Team;
	getPlayers(): any;
	getScores(arg0: string): any;
	getScores(arg0: OfflinePlayer): any;
	getTeam(arg0: string): Team;
	getTeams(): any;
	registerNewObjective(arg0: string, arg1: string): Objective;
	registerNewObjective(arg0: string, arg1: string, arg2: string): Objective;
	registerNewObjective(arg0: string, arg1: string, arg2: string, arg3: RenderType): Objective;
	registerNewTeam(arg0: string): Team;
	resetScores(arg0: string): void;
	resetScores(arg0: OfflinePlayer): void;
}

export default class Scoreboard {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Scoreboard');
	}

}

