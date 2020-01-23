declare var Java: any;
import {Scoreboard} from '../../../org/bukkit/scoreboard/Scoreboard.js'
import {RenderType} from '../../../org/bukkit/scoreboard/RenderType.js'
import {DisplaySlot} from '../../../org/bukkit/scoreboard/DisplaySlot.js'
import {Score} from '../../../org/bukkit/scoreboard/Score.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'

export interface Objective {
	getName(): string;
	getDisplayName(): string;
	unregister(): void;
	setDisplayName(displayName: string): void;
	getCriteria(): string;
	getScoreboard(): Scoreboard;
	getRenderType(): RenderType;
	setRenderType(renderType: RenderType): void;
	setDisplaySlot(slot: DisplaySlot): void;
	getDisplaySlot(): DisplaySlot;
	isModifiable(): boolean;
	getScore(entry: string): Score;
	getScore(player: OfflinePlayer): Score;
}

export class Objective {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Objective');
	}
}

