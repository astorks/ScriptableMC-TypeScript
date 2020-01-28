import { Block } from '../../../../org/bukkit/block/Block.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityDamageEvent$DamageModifier } from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageModifier.js';
import { EntityDamageEvent$DamageCause } from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageCause.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { EntityDamageEvent } from '../../../../org/bukkit/event/entity/EntityDamageEvent.js';
export interface EntityDamageByBlockEvent extends EntityDamageEvent {
    getDamager(): Block;
    getHandlers(): HandlerList;
    isApplicable(type: EntityDamageEvent$DamageModifier): boolean;
    setDamage(type: EntityDamageEvent$DamageModifier, damage: number): void;
    setDamage(damage: number): void;
    getDamage(): number;
    getDamage(type: EntityDamageEvent$DamageModifier): number;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getOriginalDamage(type: EntityDamageEvent$DamageModifier): number;
    getFinalDamage(): number;
    getCause(): EntityDamageEvent$DamageCause;
    getEntity(): Entity;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class EntityDamageByBlockEvent {
    static get $javaClass(): any;
    constructor(damager: Block, damagee: Entity, cause: EntityDamageEvent$DamageCause, modifiers: any, modifierFunctions: any);
    constructor(damager: Block, damagee: Entity, cause: EntityDamageEvent$DamageCause, damage: number);
    static getHandlerList(): HandlerList;
}
