declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityExhaustionEvent$ExhaustionReason from './EntityExhaustionEvent$ExhaustionReason.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js'

export default interface EntityExhaustionEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntity(): HumanEntity;
	getEntityType(): EntityType;
	getEventName(): string;
	getExhaustion(): number;
	getExhaustionReason(): EntityExhaustionEvent$ExhaustionReason;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setExhaustion(exhaustion: number): void;
}

export default class EntityExhaustionEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityExhaustionEvent');
	}

	constructor(who: HumanEntity, exhaustionReason: EntityExhaustionEvent$ExhaustionReason, exhaustion: number);
	constructor(...args: any[]) {
		return new EntityExhaustionEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityExhaustionEvent.$javaClass.getHandlerList(...args);
	}

}

