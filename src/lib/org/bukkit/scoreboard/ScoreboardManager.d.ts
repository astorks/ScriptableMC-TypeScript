import Scoreboard from '../../../org/bukkit/scoreboard/Scoreboard.js';
export default interface ScoreboardManager {
    getMainScoreboard(): Scoreboard;
    getNewScoreboard(): Scoreboard;
}
export default class ScoreboardManager {
    static get $javaClass(): any;
}
