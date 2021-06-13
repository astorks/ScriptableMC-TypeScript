declare var Java: any;
import Entity from '../../../../org/bukkit/entity/Entity.js'
import Fish from '../../../../org/bukkit/entity/Fish.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerBucketEntityEvent from './PlayerBucketEntityEvent.js'

export default interface PlayerBucketFishEvent extends PlayerBucketEntityEvent {
	getEntity(): Fish;
	getEntity(): Entity;
	getEntityBucket(): ItemStack;
	getEventName(): string;
	getFishBucket(): ItemStack;
	getHandlers(): HandlerList;
	getOriginalBucket(): ItemStack;
	getPlayer(): Player;
	getWaterBucket(): ItemStack;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerBucketFishEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerBucketFishEvent');
	}

	constructor(player: Player, fish: Fish, waterBucket: ItemStack, fishBucket: ItemStack);
	constructor(...args: any[]) {
		return new PlayerBucketFishEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerBucketFishEvent.$javaClass.getHandlerList(...args);
	}

}

