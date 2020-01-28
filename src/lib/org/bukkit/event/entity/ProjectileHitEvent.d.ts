import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { Projectile } from '../../../../org/bukkit/entity/Projectile.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { BlockFace } from '../../../../org/bukkit/block/BlockFace.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface ProjectileHitEvent extends EntityEvent {
    getHandlers(): HandlerList;
    getEntity(): Entity;
    getEntity(): Projectile;
    getHitBlock(): Block;
    getHitBlockFace(): BlockFace;
    getHitEntity(): Entity;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class ProjectileHitEvent {
    static get $javaClass(): any;
    constructor(projectile: Projectile, hitEntity: Entity);
    constructor(projectile: Projectile, hitBlock: Block);
    constructor(projectile: Projectile, hitEntity: Entity, hitBlock: Block);
    constructor(projectile: Projectile, hitEntity: Entity, hitBlock: Block, hitFace: BlockFace);
    constructor(projectile: Projectile);
    static getHandlerList(): HandlerList;
}
