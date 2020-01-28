import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { ThrownExpBottle } from '../../../../org/bukkit/entity/ThrownExpBottle.js';
import { Projectile } from '../../../../org/bukkit/entity/Projectile.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { BlockFace } from '../../../../org/bukkit/block/BlockFace.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { ProjectileHitEvent } from '../../../../org/bukkit/event/entity/ProjectileHitEvent.js';
export interface ExpBottleEvent extends ProjectileHitEvent {
    getHandlers(): HandlerList;
    getEntity(): Entity;
    getEntity(): ThrownExpBottle;
    getEntity(): Projectile;
    setExperience(exp: number): void;
    getExperience(): number;
    getShowEffect(): boolean;
    setShowEffect(showEffect: boolean): void;
    getHitBlock(): Block;
    getHitBlockFace(): BlockFace;
    getHitEntity(): Entity;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class ExpBottleEvent {
    static get $javaClass(): any;
    constructor(bottle: ThrownExpBottle, exp: number);
    static getHandlerList(): HandlerList;
}
