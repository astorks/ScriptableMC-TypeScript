declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Location from '../../../../org/bukkit/Location.js'

export default interface EntityExplodeEvent extends EntityEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getYield(): number;
	blockList(): Array<Block>;
	setYield(_yield: number): void;
	getLocation(): Location;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class EntityExplodeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityExplodeEvent');
	}
	constructor(what: Entity, location: Location, blocks: Array<any>, _yield: number);
	constructor(...args: any[]) {
		return new EntityExplodeEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityExplodeEvent.$javaClass.getHandlerList(...args);
	}
}

