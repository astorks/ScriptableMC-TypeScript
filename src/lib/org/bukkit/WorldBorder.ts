declare var Java: any;
import {Location} from '../../org/bukkit/Location.js'

export interface WorldBorder {
	getSize(): number;
	reset(): void;
	setSize(newSize: number, seconds: number): void;
	setSize(newSize: number): void;
	isInside(location: Location): boolean;
	getDamageAmount(): number;
	setDamageAmount(damage: number): void;
	getWarningTime(): number;
	setWarningDistance(distance: number): void;
	setWarningTime(seconds: number): void;
	getWarningDistance(): number;
	getCenter(): Location;
	setCenter(location: Location): void;
	setCenter(x: number, z: number): void;
	getDamageBuffer(): number;
	setDamageBuffer(blocks: number): void;
}

export class WorldBorder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.WorldBorder');
	}
}

