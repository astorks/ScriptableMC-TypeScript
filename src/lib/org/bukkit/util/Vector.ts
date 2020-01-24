declare var Java: any;
import {Location} from '../../../org/bukkit/Location.js'
import {World} from '../../../org/bukkit/World.js'
import {BlockVector} from '../../../org/bukkit/util/BlockVector.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface Vector extends ConfigurationSerializable {
	add(vec: Vector): Vector;
	length(): number;
	clone(): Vector;
	clone(): any;
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
	rotateAroundNonUnitAxis(axis: Vector, angle: number): Vector;
	serialize(): any;
	setZ(z: number): Vector;
	setZ(z: number): Vector;
	setZ(z: number): Vector;
	getY(): number;
	setX(x: number): Vector;
	setX(x: number): Vector;
	setX(x: number): Vector;
	setY(y: number): Vector;
	setY(y: number): Vector;
	setY(y: number): Vector;
	getZ(): number;
	getBlockZ(): number;
	getBlockY(): number;
	getBlockX(): number;
	getX(): number;
	subtract(vec: Vector): Vector;
	distanceSquared(o: Vector): number;
	lengthSquared(): number;
	checkFinite(): void;
	getCrossProduct(o: Vector): Vector;
	getMidpoint(other: Vector): Vector;
	rotateAroundAxis(axis: Vector, angle: number): Vector;
	isInSphere(origin: Vector, radius: number): boolean;
	rotateAroundX(angle: number): Vector;
	rotateAroundZ(angle: number): Vector;
	isInAABB(min: Vector, max: Vector): boolean;
	crossProduct(o: Vector): Vector;
	angle(other: Vector): number;
	toLocation(world: World): Location;
	toLocation(world: World, yaw: number, pitch: number): Location;
	toBlockVector(): BlockVector;
	rotateAroundY(angle: number): Vector;
	midpoint(other: Vector): Vector;
}

export class Vector {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.Vector');
	}
	constructor(x: number, y: number, z: number);
	constructor(x: number, y: number, z: number);
	constructor();
	constructor(x: number, y: number, z: number);
	constructor(...args: any[]) {
		return new Vector.$javaClass(...args);
	}
}

