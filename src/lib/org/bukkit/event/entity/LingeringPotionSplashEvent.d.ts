import AreaEffectCloud from '../../../../org/bukkit/entity/AreaEffectCloud.js';
import Block from '../../../../org/bukkit/block/Block.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Projectile from '../../../../org/bukkit/entity/Projectile.js';
import ProjectileHitEvent from '../../../../org/bukkit/event/entity/ProjectileHitEvent.js';
import ThrownPotion from '../../../../org/bukkit/entity/ThrownPotion.js';
export default interface LingeringPotionSplashEvent extends ProjectileHitEvent, Cancellable {
    getEntity(): Entity;
    getEntity(): Projectile;
    getEntity(): ThrownPotion;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getAreaEffectCloud(): AreaEffectCloud;
    getHitBlock(): Block;
    getHitBlockFace(): BlockFace;
    getHitEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class LingeringPotionSplashEvent {
    static get $javaClass(): any;
    constructor(potion: ThrownPotion, entity: AreaEffectCloud);
    static getHandlerList(): HandlerList;
}
