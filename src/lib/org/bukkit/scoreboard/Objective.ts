declare var Java: any;
import DisplaySlot from '../../../org/bukkit/scoreboard/DisplaySlot.js'
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js'
import RenderType from '../../../org/bukkit/scoreboard/RenderType.js'
import Score from '../../../org/bukkit/scoreboard/Score.js'
import Scoreboard from '../../../org/bukkit/scoreboard/Scoreboard.js'

export default interface Objective {
	unregister(): void;
	setDisplayName(arg0: string): void;
	getScoreboard(): Scoreboard;
	getCriteria(): string;
	getDisplaySlot(): DisplaySlot;
	setDisplaySlot(arg0: DisplaySlot): void;
	isModifiable(): boolean;
	setRenderType(arg0: RenderType): void;
	getRenderType(): RenderType;
	getScore(arg0: OfflinePlayer): Score;
	getScore(arg0: string): Score;
	getName(): string;
	getDisplayName(): string;
}

export default class Objective {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Objective');
	}
}

