declare var Java: any;
import {Block} from '../../../../org/bukkit/block/Block.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityDamageEvent$DamageModifier} from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageModifier.js'
import {EntityDamageEvent$DamageCause} from '../../../../org/bukkit/event/entity/EntityDamageEvent$DamageCause.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityDamageEvent} from '../../../../org/bukkit/event/entity/EntityDamageEvent.js'

export interface EntityDamageByBlockEvent extends EntityDamageEvent {
	getDamager(): Block;
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

export class EntityDamageByBlockEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityDamageByBlockEvent');
	}
	constructor(damager: Block, damagee: Entity, cause: EntityDamageEvent$DamageCause, modifiers: any, modifierFunctions: any);
	constructor(damager: Block, damagee: Entity, cause: EntityDamageEvent$DamageCause, damage: number);
	constructor(...args: any[]) {
		return new EntityDamageByBlockEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityDamageByBlockEvent.$javaClass.getHandlerList(...args);
	}
}

