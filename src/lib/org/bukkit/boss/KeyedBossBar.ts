declare var Java: any;
import {BarFlag} from '../../../org/bukkit/boss/BarFlag.js'
import {BarColor} from '../../../org/bukkit/boss/BarColor.js'
import {Player} from '../../../org/bukkit/entity/Player.js'
import {BarStyle} from '../../../org/bukkit/boss/BarStyle.js'
import {NamespacedKey} from '../../../org/bukkit/NamespacedKey.js'
import {BossBar} from '../../../org/bukkit/boss/BossBar.js'
import {Keyed} from '../../../org/bukkit/Keyed.js'

export interface KeyedBossBar extends BossBar, Keyed {
	removeAll(): void;
	addFlag(flag: BarFlag): void;
	getTitle(): string;
	getColor(): BarColor;
	setColor(color: BarColor): void;
	getPlayers(): any;
	removeFlag(flag: BarFlag): void;
	setProgress(progress: number): void;
	getProgress(): number;
	show(): void;
	setTitle(title: string): void;
	addPlayer(player: Player): void;
	removePlayer(player: Player): void;
	getStyle(): BarStyle;
	hide(): void;
	hasFlag(flag: BarFlag): boolean;
	setVisible(visible: boolean): void;
	setStyle(style: BarStyle): void;
	isVisible(): boolean;
	getKey(): NamespacedKey;
}

export class KeyedBossBar {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.boss.KeyedBossBar');
	}
}

