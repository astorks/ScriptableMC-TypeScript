import Block from '../../../../org/bukkit/block/Block.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityDamageEvent from '../../../../org/bukkit/event/entity/EntityDamageEvent.js';
import EntityDamageEvent$DamageCause from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageCause.js';
import EntityDamageEvent$DamageModifier from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageModifier.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EntityDamageByBlockEvent extends EntityDamageEvent {
    getDamager(): Block;
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
export default class EntityDamageByBlockEvent {
    static get $javaClass(): any;
    constructor(damager: Block, damagee: Entity, cause: EntityDamageEvent$DamageCause, damage: number);
    constructor(damager: Block, damagee: Entity, cause: EntityDamageEvent$DamageCause, modifiers: any, modifierFunctions: any);
    static getHandlerList(): HandlerList;
}
