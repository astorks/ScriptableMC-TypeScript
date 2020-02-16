declare var Java: any;
import AbstractHorse from '../../../../org/bukkit/entity/AbstractHorse.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface HorseJumpEvent extends EntityEvent, Cancellable {
	getEntity(): AbstractHorse;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPower(): number;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setPower(power: number): void;
}

export default class HorseJumpEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.HorseJumpEvent');
	}

	constructor(horse: AbstractHorse, power: number);
	constructor(...args: any[]) {
		return new HorseJumpEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return HorseJumpEvent.$javaClass.getHandlerList(...args);
	}

}

