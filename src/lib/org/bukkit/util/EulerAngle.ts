declare var Java: any;

export default interface EulerAngle {
	add(x: number, y: number, z: number): EulerAngle;
	getX(): number;
	getY(): number;
	getZ(): number;
	setX(x: number): EulerAngle;
	setY(y: number): EulerAngle;
	setZ(z: number): EulerAngle;
	subtract(x: number, y: number, z: number): EulerAngle;
}

export default class EulerAngle {
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

