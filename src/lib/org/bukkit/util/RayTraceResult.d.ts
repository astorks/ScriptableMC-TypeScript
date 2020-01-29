import { BlockFace } from '../../../org/bukkit/block/BlockFace.js';
import { Entity } from '../../../org/bukkit/entity/Entity.js';
import { Block } from '../../../org/bukkit/block/Block.js';
import { Vector } from '../../../org/bukkit/util/Vector.js';
export interface RayTraceResult {
    getHitBlockFace(): BlockFace;
    getHitEntity(): Entity;
    getHitBlock(): Block;
    getHitPosition(): Vector;
}
export declare class RayTraceResult {
    static get $javaClass(): any;
    constructor(hitPosition: Vector, hitEntity: Entity, hitBlockFace: BlockFace);
    constructor(hitPosition: Vector, hitEntity: Entity);
    constructor(hitPosition: Vector, hitBlock: Block, hitBlockFace: BlockFace);
    constructor(hitPosition: Vector);
    constructor(hitPosition: Vector, hitBlockFace: BlockFace);
}
