declare var Java: any;
import Objective from '../../../org/bukkit/scoreboard/Objective.js'
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js'
import Scoreboard from '../../../org/bukkit/scoreboard/Scoreboard.js'

export default interface Score {
	getEntry(): string;
	getObjective(): Objective;
	getPlayer(): OfflinePlayer;
	getScore(): number;
	getScoreboard(): Scoreboard;
	isScoreSet(): boolean;
	setScore(arg0: number): void;
}

export default class Score {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Score');
	}

}

