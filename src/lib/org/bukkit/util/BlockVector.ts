declare var Java: any;
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {Location} from '../../../org/bukkit/Location.js'
import {World} from '../../../org/bukkit/World.js'

export interface BlockVector extends Vector {
	clone(): any;
	clone(): Vector;
	clone(): BlockVector;
	add(vec: Vector): Vector;
	length(): number;
	dot(other: Vector): number;
	copy(vec: Vector): Vector;
	zero(): Vector;
	normalize(): Vector;
	distance(o: Vector): number;
	divide(vec: Vector): Vector;
	multiply(m: number): Vector;
	multiply(vec: Vector): Vector;
	multiply(m: number): Vector;
	multiply(m: number): Vector;
	isNormalized(): boolean;
	serialize(): any;
	crossProduct(o: Vector): Vector;
	getCrossProduct(o: Vector): Vector;
	rotateAroundY(angle: number): Vector;
	toLocation(world: World): Location;
	toLocation(world: World, yaw: number, pitch: number): Location;
	toBlockVector(): BlockVector;
	rotateAroundAxis(axis: Vector, angle: number): Vector;
	getMidpoint(other: Vector): Vector;
	rotateAroundX(angle: number): Vector;
	isInAABB(min: Vector, max: Vector): boolean;
	isInSphere(origin: Vector, radius: number): boolean;
	midpoint(other: Vector): Vector;
	rotateAroundZ(angle: number): Vector;
	angle(other: Vector): number;
	checkFinite(): void;
	setY(y: number): Vector;
	setY(y: number): Vector;
	setY(y: number): Vector;
	getBlockZ(): number;
	subtract(vec: Vector): Vector;
	setX(x: number): Vector;
	setX(x: number): Vector;
	setX(x: number): Vector;
	getBlockX(): number;
	getBlockY(): number;
	getZ(): number;
	getX(): number;
	lengthSquared(): number;
	distanceSquared(o: Vector): number;
	setZ(z: number): Vector;
	setZ(z: number): Vector;
	setZ(z: number): Vector;
	getY(): number;
	rotateAroundNonUnitAxis(axis: Vector, angle: number): Vector;
}

export class BlockVector {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.BlockVector');
	}
	constructor(x: number, y: number, z: number);
	constructor(x: number, y: number, z: number);
	constructor(x: number, y: number, z: number);
	constructor(vec: Vector);
	constructor();
	constructor(...args: any[]) {
		return new BlockVector.$javaClass(...args);
	}
}

