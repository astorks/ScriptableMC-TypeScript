import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityDamageEvent$DamageModifier } from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageModifier.js';
import { EntityDamageEvent$DamageCause } from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageCause.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityDamageEvent extends EntityEvent, Cancellable {
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
export declare class EntityDamageEvent {
    static get $javaClass(): any;
    constructor(damagee: Entity, cause: EntityDamageEvent$DamageCause, modifiers: any, modifierFunctions: any);
    constructor(damagee: Entity, cause: EntityDamageEvent$DamageCause, damage: number);
    static getHandlerList(): HandlerList;
}
