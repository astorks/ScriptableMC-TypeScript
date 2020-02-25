declare var Java: any;
import Location from '../../org/bukkit/Location.js'

export default interface WorldBorder {
	getCenter(): Location;
	getDamageAmount(): number;
	getDamageBuffer(): number;
	getSize(): number;
	getWarningDistance(): number;
	getWarningTime(): number;
	isInside(arg0: Location): boolean;
	reset(): void;
	setCenter(arg0: Location): void;
	setCenter(arg0: number, arg1: number): void;
	setDamageAmount(arg0: number): void;
	setDamageBuffer(arg0: number): void;
	setSize(arg0: number): void;
	setSize(arg0: number, arg1: number): void;
	setWarningDistance(arg0: number): void;
	setWarningTime(arg0: number): void;
}

export default class WorldBorder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.WorldBorder');
	}

}

