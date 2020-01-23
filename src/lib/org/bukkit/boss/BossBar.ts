declare var Java: any;
import {BarFlag} from '../../../org/bukkit/boss/BarFlag.js'
import {BarColor} from '../../../org/bukkit/boss/BarColor.js'
import {Player} from '../../../org/bukkit/entity/Player.js'
import {BarStyle} from '../../../org/bukkit/boss/BarStyle.js'

export interface BossBar {
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
}

export class BossBar {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.boss.BossBar');
	}
}

