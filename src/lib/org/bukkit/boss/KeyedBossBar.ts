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
	hide(): void;
	setVisible(visible: boolean): void;
	setProgress(progress: number): void;
	setTitle(title: string): void;
	setColor(color: BarColor): void;
	addPlayer(player: Player): void;
	setStyle(style: BarStyle): void;
	getProgress(): number;
	removeFlag(flag: BarFlag): void;
	isVisible(): boolean;
	removePlayer(player: Player): void;
	show(): void;
	getStyle(): BarStyle;
	hasFlag(flag: BarFlag): boolean;
	getPlayers(): any;
	getColor(): BarColor;
	getKey(): NamespacedKey;
}

export class KeyedBossBar {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.boss.KeyedBossBar');
	}
}

