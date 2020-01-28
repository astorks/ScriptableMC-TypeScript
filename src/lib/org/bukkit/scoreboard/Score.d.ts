import { Scoreboard } from '../../../org/bukkit/scoreboard/Scoreboard.js';
import { OfflinePlayer } from '../../../org/bukkit/OfflinePlayer.js';
import { Objective } from '../../../org/bukkit/scoreboard/Objective.js';
export interface Score {
    getScoreboard(): Scoreboard;
    getPlayer(): OfflinePlayer;
    getObjective(): Objective;
    setScore(arg0: number): void;
    isScoreSet(): boolean;
    getScore(): number;
    getEntry(): string;
}
export declare class Score {
    static get $javaClass(): any;
}
