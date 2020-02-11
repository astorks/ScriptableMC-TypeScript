import Scoreboard from '../../../org/bukkit/scoreboard/Scoreboard.js';
export default interface ScoreboardManager {
    getNewScoreboard(): Scoreboard;
    getMainScoreboard(): Scoreboard;
}
export default class ScoreboardManager {
    static get $javaClass(): any;
}
