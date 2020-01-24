declare var Java: any;
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {Scoreboard} from '../../../org/bukkit/scoreboard/Scoreboard.js'
import {Objective} from '../../../org/bukkit/scoreboard/Objective.js'

export interface Score {
	getEntry(): string;
	getPlayer(): OfflinePlayer;
	getScoreboard(): Scoreboard;
	setScore(score: number): void;
	isScoreSet(): boolean;
	getScore(): number;
	getObjective(): Objective;
}

export class Score {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Score');
	}
}

