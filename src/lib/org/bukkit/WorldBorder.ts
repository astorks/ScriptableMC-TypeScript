declare var Java: any;
import Location from '../../org/bukkit/Location.js'

export default interface WorldBorder {
	getCenter(): Location;
	getDamageBuffer(): number;
	getWarningDistance(): number;
	setCenter(arg0: Location): void;
	setCenter(arg0: number, arg1: number): void;
	setDamageBuffer(arg0: number): void;
	getDamageAmount(): number;
	setDamageAmount(arg0: number): void;
	getWarningTime(): number;
	setWarningTime(arg0: number): void;
	setWarningDistance(arg0: number): void;
	isInside(arg0: Location): boolean;
	getSize(): number;
	reset(): void;
	setSize(arg0: number, arg1: number): void;
	setSize(arg0: number): void;
}

export default class WorldBorder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.WorldBorder');
	}
}

