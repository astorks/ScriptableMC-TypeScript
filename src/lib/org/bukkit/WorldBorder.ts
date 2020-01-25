declare var Java: any;
import {Location} from '../../org/bukkit/Location.js'

export interface WorldBorder {
	getCenter(): Location;
	getWarningDistance(): number;
	getDamageBuffer(): number;
	setDamageBuffer(arg0: number): void;
	getDamageAmount(): number;
	setDamageAmount(arg0: number): void;
	getWarningTime(): number;
	setWarningTime(arg0: number): void;
	setWarningDistance(arg0: number): void;
	isInside(arg0: Location): boolean;
	setCenter(arg0: number, arg1: number): void;
	setCenter(arg0: Location): void;
	getSize(): number;
	reset(): void;
	setSize(arg0: number): void;
	setSize(arg0: number, arg1: number): void;
}

export class WorldBorder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.WorldBorder');
	}
}

