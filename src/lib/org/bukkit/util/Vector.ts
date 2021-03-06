declare var Java: any;
import BlockVector from '../../../org/bukkit/util/BlockVector.js'
import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import Location from '../../../org/bukkit/Location.js'
import World from '../../../org/bukkit/World.js'

export default interface Vector extends ConfigurationSerializable {
	add(vec: Vector): Vector;
	angle(other: Vector): number;
	checkFinite(): void;
	clone(): Vector;
	clone(): any;
	copy(vec: Vector): Vector;
	crossProduct(o: Vector): Vector;
	distance(o: Vector): number;
	distanceSquared(o: Vector): number;
	divide(vec: Vector): Vector;
	dot(other: Vector): number;
	getBlockX(): number;
	getBlockY(): number;
	getBlockZ(): number;
	getCrossProduct(o: Vector): Vector;
	getMidpoint(other: Vector): Vector;
	getX(): number;
	getY(): number;
	getZ(): number;
	isInAABB(min: Vector, max: Vector): boolean;
	isInSphere(origin: Vector, radius: number): boolean;
	isNormalized(): boolean;
	length(): number;
	lengthSquared(): number;
	midpoint(other: Vector): Vector;
	multiply(m: number): Vector;
	multiply(vec: Vector): Vector;
	multiply(m: number): Vector;
	multiply(m: number): Vector;
	normalize(): Vector;
	rotateAroundAxis(axis: Vector, angle: number): Vector;
	rotateAroundNonUnitAxis(axis: Vector, angle: number): Vector;
	rotateAroundX(angle: number): Vector;
	rotateAroundY(angle: number): Vector;
	rotateAroundZ(angle: number): Vector;
	serialize(): any;
	setX(x: number): Vector;
	setX(x: number): Vector;
	setX(x: number): Vector;
	setY(y: number): Vector;
	setY(y: number): Vector;
	setY(y: number): Vector;
	setZ(z: number): Vector;
	setZ(z: number): Vector;
	setZ(z: number): Vector;
	subtract(vec: Vector): Vector;
	toBlockVector(): BlockVector;
	toLocation(world: World): Location;
	toLocation(world: World, yaw: number, pitch: number): Location;
	zero(): Vector;
}

export default class Vector {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.Vector');
	}

	constructor();
	constructor(x: number, y: number, z: number);
	constructor(x: number, y: number, z: number);
	constructor(x: number, y: number, z: number);
	constructor(...args: any[]) {
		return new Vector.$javaClass(...args);
	}

	public static deserialize(args: any): Vector;
	public static deserialize(...args: any[]): any {
		return Vector.$javaClass.deserialize(...args);
	}

	public static getEpsilon(): number;
	public static getEpsilon(...args: any[]): any {
		return Vector.$javaClass.getEpsilon(...args);
	}

	public static getMaximum(v1: Vector, v2: Vector): Vector;
	public static getMaximum(...args: any[]): any {
		return Vector.$javaClass.getMaximum(...args);
	}

	public static getMinimum(v1: Vector, v2: Vector): Vector;
	public static getMinimum(...args: any[]): any {
		return Vector.$javaClass.getMinimum(...args);
	}

	public static getRandom(): Vector;
	public static getRandom(...args: any[]): any {
		return Vector.$javaClass.getRandom(...args);
	}

}

