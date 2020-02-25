declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerInteractEntityEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getHand(): EquipmentSlot;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getRightClicked(): Entity;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerInteractEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerInteractEntityEvent');
	}

	constructor(who: Player, clickedEntity: Entity);
	constructor(who: Player, clickedEntity: Entity, hand: EquipmentSlot);
	constructor(...args: any[]) {
		return new PlayerInteractEntityEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerInteractEntityEvent.$javaClass.getHandlerList(...args);
	}

}

