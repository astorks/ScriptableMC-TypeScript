import { Block } from '../../../../org/bukkit/block/Block.js';
import { EntityDamageEvent$DamageCause } from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageCause.js';
import { EntityDamageEvent$DamageModifier } from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageModifier.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { EntityDamageEvent } from '../../../../org/bukkit/event/entity/EntityDamageEvent.js';
export interface EntityDamageByBlockEvent extends EntityDamageEvent {
    getDamager(): Block;
    getCause(): EntityDamageEvent$DamageCause;
    setDamage(type: EntityDamageEvent$DamageModifier, damage: number): void;
    setDamage(damage: number): void;
    isApplicable(type: EntityDamageEvent$DamageModifier): boolean;
    getDamage(): number;
    getDamage(type: EntityDamageEvent$DamageModifier): number;
    getHandlers(): HandlerList;
    getFinalDamage(): number;
    getOriginalDamage(type: EntityDamageEvent$DamageModifier): number;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class EntityDamageByBlockEvent {
    static get $javaClass(): any;
    constructor(damager: Block, damagee: Entity, cause: EntityDamageEvent$DamageCause, damage: number);
    constructor(damager: Block, damagee: Entity, cause: EntityDamageEvent$DamageCause, modifiers: any, modifierFunctions: any);
    static getHandlerList(): HandlerList;
}
