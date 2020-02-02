import Objective from '../../../org/bukkit/scoreboard/Objective.js';
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js';
import Scoreboard from '../../../org/bukkit/scoreboard/Scoreboard.js';
export default interface Score {
    getEntry(): string;
    getPlayer(): OfflinePlayer;
    getScoreboard(): Scoreboard;
    getObjective(): Objective;
    setScore(arg0: number): void;
    getScore(): number;
    isScoreSet(): boolean;
}
export default class Score {
    static get $javaClass(): any;
}
