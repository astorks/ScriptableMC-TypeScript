import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { Projectile } from '../../../../org/bukkit/entity/Projectile.js';
import { ThrownExpBottle } from '../../../../org/bukkit/entity/ThrownExpBottle.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { BlockFace } from '../../../../org/bukkit/block/BlockFace.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { ProjectileHitEvent } from '../../../../org/bukkit/event/entity/ProjectileHitEvent.js';
export interface ExpBottleEvent extends ProjectileHitEvent {
    getEntity(): Entity;
    getEntity(): Projectile;
    getEntity(): ThrownExpBottle;
    getHandlers(): HandlerList;
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
export declare class ExpBottleEvent {
    static get $javaClass(): any;
    constructor(bottle: ThrownExpBottle, exp: number);
    static getHandlerList(): HandlerList;
}
