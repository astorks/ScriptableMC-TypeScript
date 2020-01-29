import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { Projectile } from '../../../../org/bukkit/entity/Projectile.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { BlockFace } from '../../../../org/bukkit/block/BlockFace.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface ProjectileHitEvent extends EntityEvent {
    getEntity(): Entity;
    getEntity(): Projectile;
    getHandlers(): HandlerList;
    getHitBlockFace(): BlockFace;
    getHitEntity(): Entity;
    getHitBlock(): Block;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class ProjectileHitEvent {
    static get $javaClass(): any;
    constructor(projectile: Projectile, hitEntity: Entity, hitBlock: Block);
    constructor(projectile: Projectile, hitEntity: Entity, hitBlock: Block, hitFace: BlockFace);
    constructor(projectile: Projectile, hitEntity: Entity);
    constructor(projectile: Projectile);
    constructor(projectile: Projectile, hitBlock: Block);
    static getHandlerList(): HandlerList;
}
