import { Scoreboard } from '../../../org/bukkit/scoreboard/Scoreboard.js';
import { OfflinePlayer } from '../../../org/bukkit/OfflinePlayer.js';
import { Objective } from '../../../org/bukkit/scoreboard/Objective.js';
export interface Score {
    getEntry(): string;
    getScoreboard(): Scoreboard;
    getPlayer(): OfflinePlayer;
    getObjective(): Objective;
    setScore(arg0: number): void;
    getScore(): number;
    isScoreSet(): boolean;
}
export declare class Score {
    static get $javaClass(): any;
}
