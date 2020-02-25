declare var Java: any;
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerInteractEntityEvent from '../../../../org/bukkit/event/player/PlayerInteractEntityEvent.js'
import Vector from '../../../../org/bukkit/util/Vector.js'

export default interface PlayerInteractAtEntityEvent extends PlayerInteractEntityEvent {
	getClickedPosition(): Vector;
	getEventName(): string;
	getHand(): EquipmentSlot;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getRightClicked(): Entity;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerInteractAtEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerInteractAtEntityEvent');
	}

	constructor(who: Player, clickedEntity: Entity, position: Vector);
	constructor(who: Player, clickedEntity: Entity, position: Vector, hand: EquipmentSlot);
	constructor(...args: any[]) {
		return new PlayerInteractAtEntityEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerInteractAtEntityEvent.$javaClass.getHandlerList(...args);
	}

}

