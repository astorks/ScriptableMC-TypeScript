declare var Java: any;
import {Vector} from '../../org/bukkit/util/Vector.js'
import {World} from '../../org/bukkit/World.js'
import {Block} from '../../org/bukkit/block/Block.js'
import {Chunk} from '../../org/bukkit/Chunk.js'
import {ConfigurationSerializable} from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface Location extends ConfigurationSerializable {
	add(vec: Vector): Location;
	add(vec: Location): Location;
	add(x: number, y: number, z: number): Location;
	length(): number;
	clone(): any;
	clone(): Location;
	zero(): Location;
	distance(o: Location): number;
	multiply(m: number): Location;
	getWorld(): World;
	getBlock(): Block;
	serialize(): any;
	toVector(): Vector;
	checkFinite(): void;
	setDirection(vector: Vector): Location;
	getPitch(): number;
	setY(y: number): void;
	getBlockZ(): number;
	subtract(x: number, y: number, z: number): Location;
	subtract(vec: Vector): Location;
	subtract(vec: Location): Location;
	getChunk(): Chunk;
	setX(x: number): void;
	getBlockX(): number;
	getBlockY(): number;
	getZ(): number;
	getYaw(): number;
	getX(): number;
	lengthSquared(): number;
	distanceSquared(o: Location): number;
	setYaw(yaw: number): void;
	isWorldLoaded(): boolean;
	getDirection(): Vector;
	setZ(z: number): void;
	getY(): number;
	setPitch(pitch: number): void;
	setWorld(world: World): void;
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

