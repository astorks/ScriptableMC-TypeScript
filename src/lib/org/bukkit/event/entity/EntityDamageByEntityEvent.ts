declare var Java: any;
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityDamageEvent from '../../../../org/bukkit/event/entity/EntityDamageEvent.js'
import EntityDamageEvent$DamageCause from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageCause.js'
import EntityDamageEvent$DamageModifier from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageModifier.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface EntityDamageByEntityEvent extends EntityDamageEvent {
	getDamager(): Entity;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setDamage(damage: number): void;
	setDamage(type: EntityDamageEvent$DamageModifier, damage: number): void;
	getDamage(): number;
	getDamage(type: EntityDamageEvent$DamageModifier): number;
	isApplicable(type: EntityDamageEvent$DamageModifier): boolean;
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
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityDamageByEntityEvent');
	}
	constructor(damager: Entity, damagee: Entity, cause: EntityDamageEvent$DamageCause, modifiers: any, modifierFunctions: any);
	constructor(damager: Entity, damagee: Entity, cause: EntityDamageEvent$DamageCause, damage: number);
	constructor(...args: any[]) {
		return new EntityDamageByEntityEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityDamageByEntityEvent.$javaClass.getHandlerList(...args);
	}
}

