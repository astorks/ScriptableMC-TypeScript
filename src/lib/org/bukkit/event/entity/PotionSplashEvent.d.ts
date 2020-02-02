import Block from '../../../../org/bukkit/block/Block.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
import Projectile from '../../../../org/bukkit/entity/Projectile.js';
import ProjectileHitEvent from '../../../../org/bukkit/event/entity/ProjectileHitEvent.js';
import ThrownPotion from '../../../../org/bukkit/entity/ThrownPotion.js';
export default interface PotionSplashEvent extends ProjectileHitEvent, Cancellable {
    getEntity(): Entity;
    getEntity(): Projectile;
    getEntity(): ThrownPotion;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getAffectedEntities(): any;
    getIntensity(entity: LivingEntity): number;
    setIntensity(entity: LivingEntity, intensity: number): void;
    getPotion(): ThrownPotion;
    getHitBlock(): Block;
    getHitEntity(): Entity;
    getHitBlockFace(): BlockFace;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PotionSplashEvent {
    static get $javaClass(): any;
    constructor(potion: ThrownPotion, affectedEntities: any);
    static getHandlerList(): HandlerList;
}