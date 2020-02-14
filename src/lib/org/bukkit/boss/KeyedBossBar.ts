declare var Java: any;
import BarColor from '../../../org/bukkit/boss/BarColor.js'
import BarFlag from '../../../org/bukkit/boss/BarFlag.js'
import BarStyle from '../../../org/bukkit/boss/BarStyle.js'
import BossBar from '../../../org/bukkit/boss/BossBar.js'
import Keyed from '../../../org/bukkit/Keyed.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'
import Player from '../../../org/bukkit/entity/Player.js'

export default interface KeyedBossBar extends BossBar, Keyed {
	addFlag(arg0: BarFlag): void;
	getTitle(): string;
	getPlayers(): Array<Player>;
	setTitle(arg0: string): void;
	getColor(): BarColor;
	setColor(arg0: BarColor): void;
	getStyle(): BarStyle;
	setStyle(arg0: BarStyle): void;
	removeFlag(arg0: BarFlag): void;
	hasFlag(arg0: BarFlag): boolean;
	setProgress(arg0: number): void;
	getProgress(): number;
	addPlayer(arg0: Player): void;
	removePlayer(arg0: Player): void;
	setVisible(arg0: boolean): void;
	isVisible(): boolean;
	show(): void;
	hide(): void;
	removeAll(): void;
	getKey(): NamespacedKey;
}

export default class KeyedBossBar {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.boss.KeyedBossBar');
	}
}

