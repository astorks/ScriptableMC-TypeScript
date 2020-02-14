declare var Java: any;
import DisplaySlot from '../../../org/bukkit/scoreboard/DisplaySlot.js'
import Objective from '../../../org/bukkit/scoreboard/Objective.js'
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js'
import RenderType from '../../../org/bukkit/scoreboard/RenderType.js'
import Team from '../../../org/bukkit/scoreboard/Team.js'

export default interface Scoreboard {
	getPlayers(): any;
	getObjectives(): any;
	getObjective(arg0: string): Objective;
	getObjective(arg0: DisplaySlot): Objective;
	registerNewObjective(arg0: string, arg1: string): Objective;
	registerNewObjective(arg0: string, arg1: string, arg2: string): Objective;
	registerNewObjective(arg0: string, arg1: string, arg2: string, arg3: RenderType): Objective;
	getObjectivesByCriteria(arg0: string): any;
	getScores(arg0: string): any;
	getScores(arg0: OfflinePlayer): any;
	resetScores(arg0: string): void;
	resetScores(arg0: OfflinePlayer): void;
	getPlayerTeam(arg0: OfflinePlayer): Team;
	getEntryTeam(arg0: string): Team;
	getTeam(arg0: string): Team;
	getTeams(): any;
	registerNewTeam(arg0: string): Team;
	clearSlot(arg0: DisplaySlot): void;
	getEntries(): any;
}

export default class Scoreboard {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Scoreboard');
	}
}

