declare var Java: any;
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {Location} from '../../../org/bukkit/Location.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {BlockFace} from '../../../org/bukkit/block/BlockFace.js'
import {RayTraceResult} from '../../../org/bukkit/util/RayTraceResult.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface BoundingBox extends ConfigurationSerializable {
	clone(): BoundingBox;
	clone(): any;
	contains(min: Vector, max: Vector): boolean;
	contains(position: Vector): boolean;
	contains(x: number, y: number, z: number): boolean;
	contains(other: BoundingBox): boolean;
	copy(other: BoundingBox): BoundingBox;
	expand(expansion: Vector): BoundingBox;
	expand(x: number, y: number, z: number): BoundingBox;
	expand(negativeX: number, negativeY: number, negativeZ: number, positiveX: number, positiveY: number, positiveZ: number): BoundingBox;
	expand(direction: Vector, expansion: number): BoundingBox;
	expand(expansion: number): BoundingBox;
	expand(dirX: number, dirY: number, dirZ: number, expansion: number): BoundingBox;
	expand(blockFace: BlockFace, expansion: number): BoundingBox;
	shift(shiftX: number, shiftY: number, shiftZ: number): BoundingBox;
	shift(shift: Location): BoundingBox;
	shift(shift: Vector): BoundingBox;
	resize(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): BoundingBox;
	union(other: BoundingBox): BoundingBox;
	union(posX: number, posY: number, posZ: number): BoundingBox;
	union(position: Location): BoundingBox;
	union(position: Vector): BoundingBox;
	getMinX(): number;
	getMinY(): number;
	intersection(other: BoundingBox): BoundingBox;
	serialize(): any;
	getCenterX(): number;
	getCenterZ(): number;
	rayTrace(start: Vector, direction: Vector, maxDistance: number): RayTraceResult;
	getMinZ(): number;
	getMin(): Vector;
	getMax(): Vector;
	getVolume(): number;
	overlaps(other: BoundingBox): boolean;
	overlaps(min: Vector, max: Vector): boolean;
	getMaxY(): number;
	getWidthX(): number;
	getCenter(): Vector;
	expandDirectional(dirX: number, dirY: number, dirZ: number): BoundingBox;
	expandDirectional(direction: Vector): BoundingBox;
	getCenterY(): number;
	getMaxX(): number;
	getMaxZ(): number;
	getWidthZ(): number;
	getHeight(): number;
}

export class BoundingBox {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.BoundingBox');
	}
	constructor();
	constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number);
	constructor(...args: any[]) {
		return new BoundingBox.$javaClass(...args);
	}
}

