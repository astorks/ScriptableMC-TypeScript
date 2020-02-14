declare var Java: any;
import Block from '../../org/bukkit/block/Block.js'
import Chunk from '../../org/bukkit/Chunk.js'
import ConfigurationSerializable from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import Vector from '../../org/bukkit/util/Vector.js'
import World from '../../org/bukkit/World.js'

export default interface Location extends ConfigurationSerializable {
	serialize(): any;
	getBlock(): Block;
	getWorld(): World;
	setWorld(world: World): void;
	isWorldLoaded(): boolean;
	getChunk(): Chunk;
	setX(x: number): void;
	getX(): number;
	getBlockX(): number;
	setY(y: number): void;
	getY(): number;
	getBlockY(): number;
	setZ(z: number): void;
	getZ(): number;
	getBlockZ(): number;
	setYaw(yaw: number): void;
	getYaw(): number;
	setPitch(pitch: number): void;
	getPitch(): number;
	getDirection(): Vector;
	setDirection(vector: Vector): Location;
	subtract(vec: Location): Location;
	subtract(vec: Vector): Location;
	subtract(x: number, y: number, z: number): Location;
	lengthSquared(): number;
	distance(o: Location): number;
	distanceSquared(o: Location): number;
	multiply(m: number): Location;
	toVector(): Vector;
	checkFinite(): void;
	add(vec: Location): Location;
	add(vec: Vector): Location;
	add(x: number, y: number, z: number): Location;
	clone(): Location;
	clone(): any;
	length(): number;
	zero(): Location;
}

export default class Location {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Location');
	}
	constructor(world: World, x: number, y: number, z: number, yaw: number, pitch: number);
	constructor(world: World, x: number, y: number, z: number);
	constructor(...args: any[]) {
		return new Location.$javaClass(...args);
	}
	public static locToBlock(loc: number): number;
	public static locToBlock(...args: any[]): any {
		return Location.$javaClass.locToBlock(...args);
	}
	public static deserialize(args: any): Location;
	public static deserialize(...args: any[]): any {
		return Location.$javaClass.deserialize(...args);
	}
	public static normalizeYaw(yaw: number): number;
	public static normalizeYaw(...args: any[]): any {
		return Location.$javaClass.normalizeYaw(...args);
	}
	public static normalizePitch(pitch: number): number;
	public static normalizePitch(...args: any[]): any {
		return Location.$javaClass.normalizePitch(...args);
	}
}

