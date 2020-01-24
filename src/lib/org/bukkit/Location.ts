declare var Java: any;
import {Vector} from '../../org/bukkit/util/Vector.js'
import {Block} from '../../org/bukkit/block/Block.js'
import {World} from '../../org/bukkit/World.js'
import {Chunk} from '../../org/bukkit/Chunk.js'
import {ConfigurationSerializable} from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface Location extends ConfigurationSerializable {
	add(vec: Vector): Location;
	add(vec: Location): Location;
	add(x: number, y: number, z: number): Location;
	length(): number;
	clone(): Location;
	clone(): any;
	zero(): Location;
	distance(o: Location): number;
	multiply(m: number): Location;
	getBlock(): Block;
	getWorld(): World;
	serialize(): any;
	setZ(z: number): void;
	getY(): number;
	setX(x: number): void;
	setY(y: number): void;
	getZ(): number;
	getBlockZ(): number;
	getYaw(): number;
	setPitch(pitch: number): void;
	getPitch(): number;
	getBlockY(): number;
	setYaw(yaw: number): void;
	getBlockX(): number;
	isWorldLoaded(): boolean;
	setWorld(world: World): void;
	getChunk(): Chunk;
	getX(): number;
	subtract(vec: Vector): Location;
	subtract(x: number, y: number, z: number): Location;
	subtract(vec: Location): Location;
	setDirection(vector: Vector): Location;
	getDirection(): Vector;
	distanceSquared(o: Location): number;
	lengthSquared(): number;
	checkFinite(): void;
	toVector(): Vector;
}

export class Location {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Location');
	}
	constructor(world: World, x: number, y: number, z: number);
	constructor(world: World, x: number, y: number, z: number, yaw: number, pitch: number);
	constructor(...args: any[]) {
		return new Location.$javaClass(...args);
	}
}

