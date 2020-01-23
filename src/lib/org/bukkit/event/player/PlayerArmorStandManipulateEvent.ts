declare var Java: any;
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {ArmorStand} from '../../../../org/bukkit/entity/ArmorStand.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerInteractEntityEvent} from '../../../../org/bukkit/event/player/PlayerInteractEntityEvent.js'

export interface PlayerArmorStandManipulateEvent extends PlayerInteractEntityEvent {
	getSlot(): EquipmentSlot;
	getHandlers(): HandlerList;
	getRightClicked(): Entity;
	getRightClicked(): ArmorStand;
	getPlayerItem(): ItemStack;
	getArmorStandItem(): ItemStack;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getHand(): EquipmentSlot;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerArmorStandManipulateEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerArmorStandManipulateEvent');
	}
	constructor(who: Player, clickedEntity: ArmorStand, playerItem: ItemStack, armorStandItem: ItemStack, slot: EquipmentSlot);
	constructor(...args: any[]) {
		return new PlayerArmorStandManipulateEvent.$javaClass(...args);
	}
}

