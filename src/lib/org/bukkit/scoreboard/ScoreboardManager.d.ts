import { Scoreboard } from '../../../org/bukkit/scoreboard/Scoreboard.js';
export interface ScoreboardManager {
    getMainScoreboard(): Scoreboard;
    getNewScoreboard(): Scoreboard;
}
export declare class ScoreboardManager {
    static get $javaClass(): any;
}
