declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Slime from '../../../../org/bukkit/entity/Slime.js'

export default interface SlimeSplitEvent extends EntityEvent, Cancellable {
	getCount(): number;
	getEntity(): Entity;
	getEntity(): Slime;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setCount(count: number): void;
}

export default class SlimeSplitEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.SlimeSplitEvent');
	}

	constructor(slime: Slime, count: number);
	constructor(...args: any[]) {
		return new SlimeSplitEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return SlimeSplitEvent.$javaClass.getHandlerList(...args);
	}

}

