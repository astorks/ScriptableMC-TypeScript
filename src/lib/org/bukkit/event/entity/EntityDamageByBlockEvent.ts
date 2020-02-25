declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityDamageEvent from '../../../../org/bukkit/event/entity/EntityDamageEvent.js'
import EntityDamageEvent$DamageCause from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageCause.js'
import EntityDamageEvent$DamageModifier from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageModifier.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface EntityDamageByBlockEvent extends EntityDamageEvent {
	getCause(): EntityDamageEvent$DamageCause;
	getDamage(): number;
	getDamage(type: EntityDamageEvent$DamageModifier): number;
	getDamager(): Block;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getFinalDamage(): number;
	getHandlers(): HandlerList;
	getOriginalDamage(type: EntityDamageEvent$DamageModifier): number;
	isApplicable(type: EntityDamageEvent$DamageModifier): boolean;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setDamage(damage: number): void;
	setDamage(type: EntityDamageEvent$DamageModifier, damage: number): void;
}

export default class EntityDamageByBlockEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityDamageByBlockEvent');
	}

	constructor(damager: Block, damagee: Entity, cause: EntityDamageEvent$DamageCause, damage: number);
	constructor(damager: Block, damagee: Entity, cause: EntityDamageEvent$DamageCause, modifiers: any, modifierFunctions: any);
	constructor(...args: any[]) {
		return new EntityDamageByBlockEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityDamageByBlockEvent.$javaClass.getHandlerList(...args);
	}

}

