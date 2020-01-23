declare var Java: any;
import {Location} from '../../org/bukkit/Location.js'

export interface WorldBorder {
	getSize(): number;
	reset(): void;
	setSize(newSize: number, seconds: number): void;
	setSize(newSize: number): void;
	setWarningTime(seconds: number): void;
	setCenter(x: number, z: number): void;
	setCenter(location: Location): void;
	setDamageBuffer(blocks: number): void;
	getWarningTime(): number;
	getDamageAmount(): number;
	getDamageBuffer(): number;
	setDamageAmount(damage: number): void;
	isInside(location: Location): boolean;
	setWarningDistance(distance: number): void;
	getWarningDistance(): number;
	getCenter(): Location;
}

export class WorldBorder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.WorldBorder');
	}
}

