declare var Java: any;
import {Scoreboard} from '../../../org/bukkit/scoreboard/Scoreboard.js'
import {RenderType} from '../../../org/bukkit/scoreboard/RenderType.js'
import {Score} from '../../../org/bukkit/scoreboard/Score.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {DisplaySlot} from '../../../org/bukkit/scoreboard/DisplaySlot.js'

export interface Objective {
	unregister(): void;
	getScoreboard(): Scoreboard;
	setDisplayName(arg0: string): void;
	getCriteria(): string;
	getRenderType(): RenderType;
	getScore(arg0: OfflinePlayer): Score;
	getScore(arg0: string): Score;
	setRenderType(arg0: RenderType): void;
	isModifiable(): boolean;
	setDisplaySlot(arg0: DisplaySlot): void;
	getDisplaySlot(): DisplaySlot;
	getName(): string;
	getDisplayName(): string;
}

export class Objective {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Objective');
	}
}

