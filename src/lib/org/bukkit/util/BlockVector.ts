declare var Java: any;
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {Location} from '../../../org/bukkit/Location.js'
import {World} from '../../../org/bukkit/World.js'

export interface BlockVector extends Vector {
	clone(): BlockVector;
	clone(): Vector;
	clone(): any;
	isNormalized(): boolean;
	serialize(): any;
	setX(x: number): Vector;
	setX(x: number): Vector;
	setX(x: number): Vector;
	getX(): number;
	getBlockX(): number;
	setY(y: number): Vector;
	setY(y: number): Vector;
	setY(y: number): Vector;
	getY(): number;
	getBlockY(): number;
	setZ(z: number): Vector;
	setZ(z: number): Vector;
	setZ(z: number): Vector;
	getZ(): number;
	getBlockZ(): number;
	subtract(vec: Vector): Vector;
	lengthSquared(): number;
	distance(o: Vector): number;
	distanceSquared(o: Vector): number;
	multiply(vec: Vector): Vector;
	multiply(m: number): Vector;
	multiply(m: number): Vector;
	multiply(m: number): Vector;
	checkFinite(): void;
	rotateAroundY(angle: number): Vector;
	rotateAroundZ(angle: number): Vector;
	rotateAroundAxis(axis: Vector, angle: number): Vector;
	rotateAroundNonUnitAxis(axis: Vector, angle: number): Vector;
	toLocation(world: World, yaw: number, pitch: number): Location;
	toLocation(world: World): Location;
	toBlockVector(): BlockVector;
	getMidpoint(other: Vector): Vector;
	crossProduct(o: Vector): Vector;
	dot(other: Vector): number;
	midpoint(other: Vector): Vector;
	angle(other: Vector): number;
	getCrossProduct(o: Vector): Vector;
	isInAABB(min: Vector, max: Vector): boolean;
	isInSphere(origin: Vector, radius: number): boolean;
	rotateAroundX(angle: number): Vector;
	add(vec: Vector): Vector;
	length(): number;
	copy(vec: Vector): Vector;
	normalize(): Vector;
	zero(): Vector;
	divide(vec: Vector): Vector;
}

export class BlockVector {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.BlockVector');
	}
	constructor(x: number, y: number, z: number);
	constructor(x: number, y: number, z: number);
	constructor();
	constructor(x: number, y: number, z: number);
	constructor(vec: Vector);
	constructor(...args: any[]) {
		return new BlockVector.$javaClass(...args);
	}
	public static deserialize(args: any): BlockVector;
	public static deserialize(args: any): Vector;
	public static deserialize(...args: any[]): any {
		return BlockVector.$javaClass.deserialize(...args);
	}
	public static getMinimum(v1: Vector, v2: Vector): Vector;
	public static getMinimum(...args: any[]): any {
		return BlockVector.$javaClass.getMinimum(...args);
	}
	public static getMaximum(v1: Vector, v2: Vector): Vector;
	public static getMaximum(...args: any[]): any {
		return BlockVector.$javaClass.getMaximum(...args);
	}
	public static getRandom(): Vector;
	public static getRandom(...args: any[]): any {
		return BlockVector.$javaClass.getRandom(...args);
	}
	public static getEpsilon(): number;
	public static getEpsilon(...args: any[]): any {
		return BlockVector.$javaClass.getEpsilon(...args);
	}
}

