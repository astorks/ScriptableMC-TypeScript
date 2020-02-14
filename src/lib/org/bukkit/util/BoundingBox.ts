declare var Java: any;
import Block from '../../../org/bukkit/block/Block.js'
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import Location from '../../../org/bukkit/Location.js'
import RayTraceResult from '../../../org/bukkit/util/RayTraceResult.js'
import Vector from '../../../org/bukkit/util/Vector.js'

export default interface BoundingBox extends ConfigurationSerializable {
	union(other: BoundingBox): BoundingBox;
	union(position: Location): BoundingBox;
	union(posX: number, posY: number, posZ: number): BoundingBox;
	union(position: Vector): BoundingBox;
	intersection(other: BoundingBox): BoundingBox;
	overlaps(min: Vector, max: Vector): boolean;
	overlaps(other: BoundingBox): boolean;
	getMinX(): number;
	getMinY(): number;
	serialize(): any;
	getHeight(): number;
	rayTrace(start: Vector, direction: Vector, maxDistance: number): RayTraceResult;
	getCenterX(): number;
	getCenterZ(): number;
	getCenter(): Vector;
	expandDirectional(direction: Vector): BoundingBox;
	expandDirectional(dirX: number, dirY: number, dirZ: number): BoundingBox;
	getMinZ(): number;
	getMin(): Vector;
	getMaxX(): number;
	getMaxY(): number;
	getMaxZ(): number;
	getMax(): Vector;
	getWidthX(): number;
	getWidthZ(): number;
	getVolume(): number;
	getCenterY(): number;
	clone(): BoundingBox;
	clone(): any;
	contains(x: number, y: number, z: number): boolean;
	contains(min: Vector, max: Vector): boolean;
	contains(other: BoundingBox): boolean;
	contains(position: Vector): boolean;
	copy(other: BoundingBox): BoundingBox;
	expand(direction: Vector, expansion: number): BoundingBox;
	expand(dirX: number, dirY: number, dirZ: number, expansion: number): BoundingBox;
	expand(expansion: number): BoundingBox;
	expand(expansion: Vector): BoundingBox;
	expand(negativeX: number, negativeY: number, negativeZ: number, positiveX: number, positiveY: number, positiveZ: number): BoundingBox;
	expand(x: number, y: number, z: number): BoundingBox;
	expand(blockFace: BlockFace, expansion: number): BoundingBox;
	resize(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): BoundingBox;
	shift(shift: Vector): BoundingBox;
	shift(shift: Location): BoundingBox;
	shift(shiftX: number, shiftY: number, shiftZ: number): BoundingBox;
}

export default class BoundingBox {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.BoundingBox');
	}
	constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number);
	constructor();
	constructor(...args: any[]) {
		return new BoundingBox.$javaClass(...args);
	}
	public static deserialize(args: any): BoundingBox;
	public static deserialize(...args: any[]): any {
		return BoundingBox.$javaClass.deserialize(...args);
	}
	public static of(center: Location, x: number, y: number, z: number): BoundingBox;
	public static of(center: Vector, x: number, y: number, z: number): BoundingBox;
	public static of(block: Block): BoundingBox;
	public static of(corner1: Location, corner2: Location): BoundingBox;
	public static of(corner1: Block, corner2: Block): BoundingBox;
	public static of(corner1: Vector, corner2: Vector): BoundingBox;
	public static of(...args: any[]): any {
		return BoundingBox.$javaClass.of(...args);
	}
}

