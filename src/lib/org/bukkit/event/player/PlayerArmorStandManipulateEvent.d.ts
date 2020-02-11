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
    getPlayerItem(): ItemStack;
    getArmorStandItem(): ItemStack;
    getRightClicked(): ArmorStand;
    getRightClicked(): Entity;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
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