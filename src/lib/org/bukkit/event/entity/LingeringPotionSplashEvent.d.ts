import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { Projectile } from '../../../../org/bukkit/entity/Projectile.js';
import { ThrownPotion } from '../../../../org/bukkit/entity/ThrownPotion.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { AreaEffectCloud } from '../../../../org/bukkit/entity/AreaEffectCloud.js';
import { BlockFace } from '../../../../org/bukkit/block/BlockFace.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { ProjectileHitEvent } from '../../../../org/bukkit/event/entity/ProjectileHitEvent.js';
export interface LingeringPotionSplashEvent extends ProjectileHitEvent, Cancellable {
    getEntity(): Entity;
    getEntity(): Projectile;
    getEntity(): ThrownPotion;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getAreaEffectCloud(): AreaEffectCloud;
    getHitBlockFace(): BlockFace;
    getHitEntity(): Entity;
    getHitBlock(): Block;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class LingeringPotionSplashEvent {
    static get $javaClass(): any;
    constructor(potion: ThrownPotion, entity: AreaEffectCloud);
    static getHandlerList(): HandlerList;
}
