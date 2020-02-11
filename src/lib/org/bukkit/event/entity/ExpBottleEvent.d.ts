import Block from '../../../../org/bukkit/block/Block.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Projectile from '../../../../org/bukkit/entity/Projectile.js';
import ProjectileHitEvent from '../../../../org/bukkit/event/entity/ProjectileHitEvent.js';
import ThrownExpBottle from '../../../../org/bukkit/entity/ThrownExpBottle.js';
export default interface ExpBottleEvent extends ProjectileHitEvent {
    getHandlers(): HandlerList;
    getEntity(): Entity;
    getEntity(): Projectile;
    getEntity(): ThrownExpBottle;
    getExperience(): number;
    setExperience(exp: number): void;
    setShowEffect(showEffect: boolean): void;
    getShowEffect(): boolean;
    getHitBlockFace(): BlockFace;
    getHitEntity(): Entity;
    getHitBlock(): Block;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class ExpBottleEvent {
    static get $javaClass(): any;
    constructor(bottle: ThrownExpBottle, exp: number);
    static getHandlerList(): HandlerList;
}
