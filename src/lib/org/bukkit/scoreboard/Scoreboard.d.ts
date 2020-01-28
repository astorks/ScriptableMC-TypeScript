import { Objective } from '../../../org/bukkit/scoreboard/Objective.js';
import { RenderType } from '../../../org/bukkit/scoreboard/RenderType.js';
import { OfflinePlayer } from '../../../org/bukkit/OfflinePlayer.js';
import { Team } from '../../../org/bukkit/scoreboard/Team.js';
import { DisplaySlot } from '../../../org/bukkit/scoreboard/DisplaySlot.js';
export interface Scoreboard {
    getPlayers(): any;
    registerNewObjective(arg0: string, arg1: string, arg2: string, arg3: RenderType): Objective;
    registerNewObjective(arg0: string, arg1: string, arg2: string): Objective;
    registerNewObjective(arg0: string, arg1: string): Objective;
    getObjectivesByCriteria(arg0: string): any;
    getScores(arg0: string): any;
    getScores(arg0: OfflinePlayer): any;
    resetScores(arg0: OfflinePlayer): void;
    resetScores(arg0: string): void;
    getPlayerTeam(arg0: OfflinePlayer): Team;
    getEntryTeam(arg0: string): Team;
    getTeam(arg0: string): Team;
    getTeams(): any;
    registerNewTeam(arg0: string): Team;
    clearSlot(arg0: DisplaySlot): void;
    getObjectives(): any;
    getObjective(arg0: DisplaySlot): Objective;
    getObjective(arg0: string): Objective;
    getEntries(): any;
}
export declare class Scoreboard {
    static get $javaClass(): any;
}
