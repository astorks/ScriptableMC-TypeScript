import Objective from '../../../org/bukkit/scoreboard/Objective.js';
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js';
import Scoreboard from '../../../org/bukkit/scoreboard/Scoreboard.js';
export default interface Score {
    getEntry(): string;
    getScoreboard(): Scoreboard;
    getPlayer(): OfflinePlayer;
    getObjective(): Objective;
    getScore(): number;
    isScoreSet(): boolean;
    setScore(arg0: number): void;
}
export default class Score {
    static get $javaClass(): any;
}
