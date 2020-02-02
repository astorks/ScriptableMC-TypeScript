import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityDamageEvent from '../../../../org/bukkit/event/entity/EntityDamageEvent.js';
import EntityDamageEvent$DamageCause from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageCause.js';
import EntityDamageEvent$DamageModifier from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageModifier.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EntityDamageByEntityEvent extends EntityDamageEvent {
    getDamager(): Entity;
    getHandlers(): HandlerList;
    setDamage(damage: number): void;
    setDamage(type: EntityDamageEvent$DamageModifier, damage: number): void;
    getDamage(): number;
    getDamage(type: EntityDamageEvent$DamageModifier): number;
    isApplicable(type: EntityDamageEvent$DamageModifier): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getOriginalDamage(type: EntityDamageEvent$DamageModifier): number;
    getFinalDamage(): number;
    getCause(): EntityDamageEvent$DamageCause;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityDamageByEntityEvent {
    static get $javaClass(): any;
    constructor(damager: Entity, damagee: Entity, cause: EntityDamageEvent$DamageCause, modifiers: any, modifierFunctions: any);
    constructor(damager: Entity, damagee: Entity, cause: EntityDamageEvent$DamageCause, damage: number);
    static getHandlerList(): HandlerList;
}
