import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { ThrownPotion } from '../../../../org/bukkit/entity/ThrownPotion.js';
import { Projectile } from '../../../../org/bukkit/entity/Projectile.js';
import { AreaEffectCloud } from '../../../../org/bukkit/entity/AreaEffectCloud.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { BlockFace } from '../../../../org/bukkit/block/BlockFace.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { ProjectileHitEvent } from '../../../../org/bukkit/event/entity/ProjectileHitEvent.js';
export interface LingeringPotionSplashEvent extends ProjectileHitEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): Entity;
    getEntity(): ThrownPotion;
    getEntity(): Projectile;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getAreaEffectCloud(): AreaEffectCloud;
    getHitBlock(): Block;
    getHitBlockFace(): BlockFace;
    getHitEntity(): Entity;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class LingeringPotionSplashEvent {
    static get $javaClass(): any;
    constructor(potion: ThrownPotion, entity: AreaEffectCloud);
    static getHandlerList(): HandlerList;
}
