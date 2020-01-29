import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { Projectile } from '../../../../org/bukkit/entity/Projectile.js';
import { ThrownPotion } from '../../../../org/bukkit/entity/ThrownPotion.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { LivingEntity } from '../../../../org/bukkit/entity/LivingEntity.js';
import { BlockFace } from '../../../../org/bukkit/block/BlockFace.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { ProjectileHitEvent } from '../../../../org/bukkit/event/entity/ProjectileHitEvent.js';
export interface PotionSplashEvent extends ProjectileHitEvent, Cancellable {
    getEntity(): Entity;
    getEntity(): Projectile;
    getEntity(): ThrownPotion;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getAffectedEntities(): any;
    getPotion(): ThrownPotion;
    getIntensity(entity: LivingEntity): number;
    setIntensity(entity: LivingEntity, intensity: number): void;
    getHitBlockFace(): BlockFace;
    getHitEntity(): Entity;
    getHitBlock(): Block;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PotionSplashEvent {
    static get $javaClass(): any;
    constructor(potion: ThrownPotion, affectedEntities: any);
    static getHandlerList(): HandlerList;
}
