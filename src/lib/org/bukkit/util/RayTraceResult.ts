declare var Java: any;
import Block from '../../../org/bukkit/block/Block.js'
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Entity from '../../../org/bukkit/entity/Entity.js'
import Vector from '../../../org/bukkit/util/Vector.js'

export default interface RayTraceResult {
	getHitBlock(): Block;
	getHitBlockFace(): BlockFace;
	getHitEntity(): Entity;
	getHitPosition(): Vector;
}

export default class RayTraceResult {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.RayTraceResult');
	}

	constructor(hitPosition: Vector);
	constructor(hitPosition: Vector, hitEntity: Entity);
	constructor(hitPosition: Vector, hitBlockFace: BlockFace);
	constructor(hitPosition: Vector, hitEntity: Entity, hitBlockFace: BlockFace);
	constructor(hitPosition: Vector, hitBlock: Block, hitBlockFace: BlockFace);
	constructor(...args: any[]) {
		return new RayTraceResult.$javaClass(...args);
	}

}

