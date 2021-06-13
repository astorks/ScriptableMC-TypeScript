declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'

export default interface ArrowBodyCountChangeEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntity(): LivingEntity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getNewAmount(): number;
	getOldAmount(): number;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	isReset(): boolean;
	setCancelled(cancel: boolean): void;
	setNewAmount(newAmount: number): void;
}

export default class ArrowBodyCountChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ArrowBodyCountChangeEvent');
	}

	constructor(entity: LivingEntity, oldAmount: number, newAmount: number, isReset: boolean);
	constructor(...args: any[]) {
		return new ArrowBodyCountChangeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ArrowBodyCountChangeEvent.$javaClass.getHandlerList(...args);
	}

}

