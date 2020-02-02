import ArmorStand from '../../../../org/bukkit/entity/ArmorStand.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerInteractEntityEvent from '../../../../org/bukkit/event/player/PlayerInteractEntityEvent.js';
export default interface PlayerArmorStandManipulateEvent extends PlayerInteractEntityEvent {
    getSlot(): EquipmentSlot;
    getHandlers(): HandlerList;
    getRightClicked(): Entity;
    getRightClicked(): ArmorStand;
    getPlayerItem(): ItemStack;
    getArmorStandItem(): ItemStack;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getHand(): EquipmentSlot;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerArmorStandManipulateEvent {
    static get $javaClass(): any;
    constructor(who: Player, clickedEntity: ArmorStand, playerItem: ItemStack, armorStandItem: ItemStack, slot: EquipmentSlot);
    static getHandlerList(): HandlerList;
}
