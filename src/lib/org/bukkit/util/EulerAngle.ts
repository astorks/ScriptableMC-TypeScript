declare var Java: any;

export interface EulerAngle {
	setX(x: number): EulerAngle;
	getX(): number;
	setY(y: number): EulerAngle;
	getY(): number;
	setZ(z: number): EulerAngle;
	getZ(): number;
	subtract(x: number, y: number, z: number): EulerAngle;
	add(x: number, y: number, z: number): EulerAngle;
}

export class EulerAngle {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.EulerAngle');
	}
	constructor(x: number, y: number, z: number);
	constructor(...args: any[]) {
		return new EulerAngle.$javaClass(...args);
	}
	public static get ZERO(): EulerAngle {
		return EulerAngle.$javaClass.ZERO;
	}
}

