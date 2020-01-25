declare var Java: any;
import {Scoreboard} from '../../../org/bukkit/scoreboard/Scoreboard.js'

export interface ScoreboardManager {
	getMainScoreboard(): Scoreboard;
	getNewScoreboard(): Scoreboard;
}

export class ScoreboardManager {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.ScoreboardManager');
	}
}
