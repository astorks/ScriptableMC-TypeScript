declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityTransformEvent$TransformReason from '../../../../org/bukkit/event/entity/EntityTransformEvent$TransformReason.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface EntityTransformEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getTransformReason(): EntityTransformEvent$TransformReason;
	getTransformedEntities(): Array<Entity>;
	getTransformedEntity(): Entity;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class EntityTransformEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityTransformEvent');
	}

	constructor(original: Entity, convertedList: Array<any>, transformReason: EntityTransformEvent$TransformReason);
	constructor(...args: any[]) {
		return new EntityTransformEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityTransformEvent.$javaClass.getHandlerList(...args);
	}

}

