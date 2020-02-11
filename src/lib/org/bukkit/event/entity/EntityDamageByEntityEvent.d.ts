import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityDamageEvent from '../../../../org/bukkit/event/entity/EntityDamageEvent.js';
import EntityDamageEvent$DamageCause from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageCause.js';
import EntityDamageEvent$DamageModifier from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageModifier.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EntityDamageByEntityEvent extends EntityDamageEvent {
    getDamager(): Entity;
    getCause(): EntityDamageEvent$DamageCause;
    getDamage(): number;
    getDamage(type: EntityDamageEvent$DamageModifier): number;
    setDamage(type: EntityDamageEvent$DamageModifier, damage: number): void;
    setDamage(damage: number): void;
    isApplicable(type: EntityDamageEvent$DamageModifier): boolean;
    getFinalDamage(): number;
    getOriginalDamage(type: EntityDamageEvent$DamageModifier): number;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityDamageByEntityEvent {
    static get $javaClass(): any;
    constructor(damager: Entity, damagee: Entity, cause: EntityDamageEvent$DamageCause, damage: number);
    constructor(damager: Entity, damagee: Entity, cause: EntityDamageEvent$DamageCause, modifiers: any, modifierFunctions: any);
    static getHandlerList(): HandlerList;
}
