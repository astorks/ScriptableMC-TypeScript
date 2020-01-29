import { Objective } from '../../../org/bukkit/scoreboard/Objective.js';
import { RenderType } from '../../../org/bukkit/scoreboard/RenderType.js';
import { DisplaySlot } from '../../../org/bukkit/scoreboard/DisplaySlot.js';
import { OfflinePlayer } from '../../../org/bukkit/OfflinePlayer.js';
import { Team } from '../../../org/bukkit/scoreboard/Team.js';
export interface Scoreboard {
    getEntries(): any;
    getPlayers(): any;
    registerNewObjective(arg0: string, arg1: string): Objective;
    registerNewObjective(arg0: string, arg1: string, arg2: string, arg3: RenderType): Objective;
    registerNewObjective(arg0: string, arg1: string, arg2: string): Objective;
    getObjectivesByCriteria(arg0: string): any;
    getObjective(arg0: DisplaySlot): Objective;
    getObjective(arg0: string): Objective;
    resetScores(arg0: string): void;
    resetScores(arg0: OfflinePlayer): void;
    getObjectives(): any;
    registerNewTeam(arg0: string): Team;
    getScores(arg0: string): any;
    getScores(arg0: OfflinePlayer): any;
    getPlayerTeam(arg0: OfflinePlayer): Team;
    getEntryTeam(arg0: string): Team;
    getTeams(): any;
    clearSlot(arg0: DisplaySlot): void;
    getTeam(arg0: string): Team;
}
export declare class Scoreboard {
    static get $javaClass(): any;
}
