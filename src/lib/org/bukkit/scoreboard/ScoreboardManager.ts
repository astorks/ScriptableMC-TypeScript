declare var Java: any;
import Scoreboard from '../../../org/bukkit/scoreboard/Scoreboard.js'

export default interface ScoreboardManager {
	getMainScoreboard(): Scoreboard;
	getNewScoreboard(): Scoreboard;
}

export default class ScoreboardManager {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.ScoreboardManager');
	}

}

