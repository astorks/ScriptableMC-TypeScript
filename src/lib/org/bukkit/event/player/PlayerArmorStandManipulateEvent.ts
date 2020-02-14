declare var Java: any;
import ArmorStand from '../../../../org/bukkit/entity/ArmorStand.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerInteractEntityEvent from '../../../../org/bukkit/event/player/PlayerInteractEntityEvent.js'

export default interface PlayerArmorStandManipulateEvent extends PlayerInteractEntityEvent {
	getHandlers(): HandlerList;
	getPlayerItem(): ItemStack;
	getArmorStandItem(): ItemStack;
	getRightClicked(): ArmorStand;
	getRightClicked(): Entity;
	getSlot(): EquipmentSlot;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getHand(): EquipmentSlot;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class PlayerArmorStandManipulateEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerArmorStandManipulateEvent');
	}
	constructor(who: Player, clickedEntity: ArmorStand, playerItem: ItemStack, armorStandItem: ItemStack, slot: EquipmentSlot);
	constructor(...args: any[]) {
		return new PlayerArmorStandManipulateEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerArmorStandManipulateEvent.$javaClass.getHandlerList(...args);
	}
}

