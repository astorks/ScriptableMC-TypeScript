declare var Java: any;
import Block from '../../org/bukkit/block/Block.js'
import Chunk from '../../org/bukkit/Chunk.js'
import ConfigurationSerializable from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import Vector from '../../org/bukkit/util/Vector.js'
import World from '../../org/bukkit/World.js'

export default interface Location extends ConfigurationSerializable {
	add(vec: Vector): Location;
	add(vec: Location): Location;
	add(x: number, y: number, z: number): Location;
	checkFinite(): void;
	clone(): any;
	clone(): Location;
	distance(o: Location): number;
	distanceSquared(o: Location): number;
	getBlock(): Block;
	getBlockX(): number;
	getBlockY(): number;
	getBlockZ(): number;
	getChunk(): Chunk;
	getDirection(): Vector;
	getPitch(): number;
	getWorld(): World;
	getX(): number;
	getY(): number;
	getYaw(): number;
	getZ(): number;
	isWorldLoaded(): boolean;
	length(): number;
	lengthSquared(): number;
	multiply(m: number): Location;
	serialize(): any;
	setDirection(vector: Vector): Location;
	setPitch(pitch: number): void;
	setWorld(world: World): void;
	setX(x: number): void;
	setY(y: number): void;
	setYaw(yaw: number): void;
	setZ(z: number): void;
	subtract(vec: Location): Location;
	subtract(vec: Vector): Location;
	subtract(x: number, y: number, z: number): Location;
	toVector(): Vector;
	zero(): Location;
}

export default class Location {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Location');
	}

	constructor(world: World, x: number, y: number, z: number);
	constructor(world: World, x: number, y: number, z: number, yaw: number, pitch: number);
	constructor(...args: any[]) {
		return new Location.$javaClass(...args);
	}

	public static deserialize(args: any): Location;
	public static deserialize(...args: any[]): any {
		return Location.$javaClass.deserialize(...args);
	}

	public static locToBlock(loc: number): number;
	public static locToBlock(...args: any[]): any {
		return Location.$javaClass.locToBlock(...args);
	}

	public static normalizePitch(pitch: number): number;
	public static normalizePitch(...args: any[]): any {
		return Location.$javaClass.normalizePitch(...args);
	}

	public static normalizeYaw(yaw: number): number;
	public static normalizeYaw(...args: any[]): any {
		return Location.$javaClass.normalizeYaw(...args);
	}

}

