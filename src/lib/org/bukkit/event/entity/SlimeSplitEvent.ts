declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Slime} from '../../../../org/bukkit/entity/Slime.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface SlimeSplitEvent extends EntityEvent, Cancellable {
	getCount(): number;
	getHandlers(): HandlerList;
	getEntity(): Slime;
	getEntity(): Entity;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	setCount(count: number): void;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class SlimeSplitEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.SlimeSplitEvent');
	}
	constructor(slime: Slime, count: number);
	constructor(...args: any[]) {
		return new SlimeSplitEvent.$javaClass(...args);
	}
}

