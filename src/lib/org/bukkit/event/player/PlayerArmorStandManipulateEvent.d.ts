import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { ArmorStand } from '../../../../org/bukkit/entity/ArmorStand.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EquipmentSlot } from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerInteractEntityEvent } from '../../../../org/bukkit/event/player/PlayerInteractEntityEvent.js';
export interface PlayerArmorStandManipulateEvent extends PlayerInteractEntityEvent {
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
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerArmorStandManipulateEvent {
    static get $javaClass(): any;
    constructor(who: Player, clickedEntity: ArmorStand, playerItem: ItemStack, armorStandItem: ItemStack, slot: EquipmentSlot);
    static getHandlerList(): HandlerList;
}
