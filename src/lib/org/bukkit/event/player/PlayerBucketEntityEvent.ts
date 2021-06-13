declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'

export default interface PlayerBucketEntityEvent extends PlayerEvent, Cancellable {
	getEntity(): Entity;
	getEntityBucket(): ItemStack;
	getEventName(): string;
	getHandlers(): HandlerList;
	getOriginalBucket(): ItemStack;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerBucketEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerBucketEntityEvent');
	}

	constructor(player: Player, entity: Entity, originalBucket: ItemStack, entityBucket: ItemStack);
	constructor(...args: any[]) {
		return new PlayerBucketEntityEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerBucketEntityEvent.$javaClass.getHandlerList(...args);
	}

}

