declare var Java: any;
import {Location} from '../../../org/bukkit/Location.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {RayTraceResult} from '../../../org/bukkit/util/RayTraceResult.js'
import {BlockFace} from '../../../org/bukkit/block/BlockFace.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface BoundingBox extends ConfigurationSerializable {
	union(other: BoundingBox): BoundingBox;
	union(position: Location): BoundingBox;
	union(position: Vector): BoundingBox;
	union(posX: number, posY: number, posZ: number): BoundingBox;
	intersection(other: BoundingBox): BoundingBox;
	getMinX(): number;
	getMinY(): number;
	serialize(): any;
	getHeight(): number;
	rayTrace(start: Vector, direction: Vector, maxDistance: number): RayTraceResult;
	getCenterX(): number;
	getCenterZ(): number;
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
	getCenter(): Vector;
	expandDirectional(dirX: number, dirY: number, dirZ: number): BoundingBox;
	expandDirectional(direction: Vector): BoundingBox;
	overlaps(other: BoundingBox): boolean;
	overlaps(min: Vector, max: Vector): boolean;
	clone(): BoundingBox;
	clone(): any;
	contains(other: BoundingBox): boolean;
	contains(x: number, y: number, z: number): boolean;
	contains(min: Vector, max: Vector): boolean;
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

export class BoundingBox {
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

