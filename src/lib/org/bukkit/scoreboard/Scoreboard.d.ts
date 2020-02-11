import DisplaySlot from '../../../org/bukkit/scoreboard/DisplaySlot.js';
import Objective from '../../../org/bukkit/scoreboard/Objective.js';
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js';
import RenderType from '../../../org/bukkit/scoreboard/RenderType.js';
import Team from '../../../org/bukkit/scoreboard/Team.js';
export default interface Scoreboard {
    getEntries(): any;
    getPlayers(): any;
    registerNewObjective(arg0: string, arg1: string): Objective;
    registerNewObjective(arg0: string, arg1: string, arg2: string, arg3: RenderType): Objective;
    registerNewObjective(arg0: string, arg1: string, arg2: string): Objective;
    getObjectivesByCriteria(arg0: string): any;
    getObjective(arg0: string): Objective;
    getObjective(arg0: DisplaySlot): Objective;
    getTeam(arg0: string): Team;
    registerNewTeam(arg0: string): Team;
    getObjectives(): any;
    getEntryTeam(arg0: string): Team;
    getPlayerTeam(arg0: OfflinePlayer): Team;
    getTeams(): any;
    resetScores(arg0: string): void;
    resetScores(arg0: OfflinePlayer): void;
    clearSlot(arg0: DisplaySlot): void;
    getScores(arg0: OfflinePlayer): any;
    getScores(arg0: string): any;
}
export default class Scoreboard {
    static get $javaClass(): any;
}
