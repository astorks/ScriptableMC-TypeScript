import Block from '../../../../org/bukkit/block/Block.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Projectile from '../../../../org/bukkit/entity/Projectile.js';
export default interface ProjectileHitEvent extends EntityEvent {
    getHandlers(): HandlerList;
    getEntity(): Entity;
    getEntity(): Projectile;
    getHitBlockFace(): BlockFace;
    getHitEntity(): Entity;
    getHitBlock(): Block;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class ProjectileHitEvent {
    static get $javaClass(): any;
    constructor(projectile: Projectile, hitEntity: Entity, hitBlock: Block, hitFace: BlockFace);
    constructor(projectile: Projectile, hitBlock: Block);
    constructor(projectile: Projectile, hitEntity: Entity);
    constructor(projectile: Projectile);
    constructor(projectile: Projectile, hitEntity: Entity, hitBlock: Block);
    static getHandlerList(): HandlerList;
}
