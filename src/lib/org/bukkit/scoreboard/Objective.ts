declare var Java: any;
import {Scoreboard} from '../../../org/bukkit/scoreboard/Scoreboard.js'
import {RenderType} from '../../../org/bukkit/scoreboard/RenderType.js'
import {DisplaySlot} from '../../../org/bukkit/scoreboard/DisplaySlot.js'
import {Score} from '../../../org/bukkit/scoreboard/Score.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'

export interface Objective {
	getName(): string;
	unregister(): void;
	getDisplayName(): string;
	getScoreboard(): Scoreboard;
	setDisplayName(displayName: string): void;
	getRenderType(): RenderType;
	setDisplaySlot(slot: DisplaySlot): void;
	isModifiable(): boolean;
	setRenderType(renderType: RenderType): void;
	getDisplaySlot(): DisplaySlot;
	getScore(player: OfflinePlayer): Score;
	getScore(entry: string): Score;
	getCriteria(): string;
}

export class Objective {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Objective');
	}
}

