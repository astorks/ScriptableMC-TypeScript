import { EntityDamageEvent$DamageCause } from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageCause.js';
import { EntityDamageEvent$DamageModifier } from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageModifier.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityDamageEvent extends EntityEvent, Cancellable {
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
export declare class EntityDamageEvent {
    static get $javaClass(): any;
    constructor(damagee: Entity, cause: EntityDamageEvent$DamageCause, modifiers: any, modifierFunctions: any);
    constructor(damagee: Entity, cause: EntityDamageEvent$DamageCause, damage: number);
    static getHandlerList(): HandlerList;
}
