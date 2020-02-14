declare var Java: any;
import BlockState from '../../../../org/bukkit/block/BlockState.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import PortalCreateEvent$CreateReason from '../../../../org/bukkit/event/world/PortalCreateEvent$CreateReason.js'
import World from '../../../../org/bukkit/World.js'
import WorldEvent from '../../../../org/bukkit/event/world/WorldEvent.js'

export default interface PortalCreateEvent extends WorldEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	getEntity(): Entity;
	setCancelled(cancel: boolean): void;
	getReason(): PortalCreateEvent$CreateReason;
	getBlocks(): Array<BlockState>;
	getWorld(): World;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class PortalCreateEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.PortalCreateEvent');
	}
	constructor(blocks: Array<any>, world: World, entity: Entity, reason: PortalCreateEvent$CreateReason);
	constructor(blocks: Array<any>, world: World, reason: PortalCreateEvent$CreateReason);
	constructor(...args: any[]) {
		return new PortalCreateEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PortalCreateEvent.$javaClass.getHandlerList(...args);
	}
}

