declare var Java: any;
import Objective from '../../../org/bukkit/scoreboard/Objective.js'
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js'
import Scoreboard from '../../../org/bukkit/scoreboard/Scoreboard.js'

export default interface Score {
	getPlayer(): OfflinePlayer;
	getScoreboard(): Scoreboard;
	getObjective(): Objective;
	getScore(): number;
	isScoreSet(): boolean;
	setScore(arg0: number): void;
	getEntry(): string;
}

export default class Score {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Score');
	}
}

