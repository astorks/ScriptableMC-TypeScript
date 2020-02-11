import DisplaySlot from '../../../org/bukkit/scoreboard/DisplaySlot.js';
import Objective from '../../../org/bukkit/scoreboard/Objective.js';
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js';
import RenderType from '../../../org/bukkit/scoreboard/RenderType.js';
import Team from '../../../org/bukkit/scoreboard/Team.js';
export default interface Scoreboard {
    getEntries(): any;
    getPlayers(): any;
    getEntryTeam(arg0: string): Team;
    clearSlot(arg0: DisplaySlot): void;
    getObjective(arg0: DisplaySlot): Objective;
    getObjective(arg0: string): Objective;
    getPlayerTeam(arg0: OfflinePlayer): Team;
    getTeam(arg0: string): Team;
    registerNewTeam(arg0: string): Team;
    getTeams(): any;
    resetScores(arg0: string): void;
    resetScores(arg0: OfflinePlayer): void;
    getObjectives(): any;
    getScores(arg0: OfflinePlayer): any;
    getScores(arg0: string): any;
    registerNewObjective(arg0: string, arg1: string, arg2: string, arg3: RenderType): Objective;
    registerNewObjective(arg0: string, arg1: string, arg2: string): Objective;
    registerNewObjective(arg0: string, arg1: string): Objective;
    getObjectivesByCriteria(arg0: string): any;
}
export default class Scoreboard {
    static get $javaClass(): any;
}
