import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityDamageEvent$DamageCause from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageCause.js';
import EntityDamageEvent$DamageModifier from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageModifier.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EntityDamageEvent extends EntityEvent, Cancellable {
    getCause(): EntityDamageEvent$DamageCause;
    getHandlers(): HandlerList;
    setDamage(type: EntityDamageEvent$DamageModifier, damage: number): void;
    setDamage(damage: number): void;
    getDamage(): number;
    getDamage(type: EntityDamageEvent$DamageModifier): number;
    isApplicable(type: EntityDamageEvent$DamageModifier): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getOriginalDamage(type: EntityDamageEvent$DamageModifier): number;
    getFinalDamage(): number;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityDamageEvent {
    static get $javaClass(): any;
    constructor(damagee: Entity, cause: EntityDamageEvent$DamageCause, modifiers: any, modifierFunctions: any);
    constructor(damagee: Entity, cause: EntityDamageEvent$DamageCause, damage: number);
    static getHandlerList(): HandlerList;
}
