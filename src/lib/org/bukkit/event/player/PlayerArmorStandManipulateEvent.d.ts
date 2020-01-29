import { EquipmentSlot } from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { ArmorStand } from '../../../../org/bukkit/entity/ArmorStand.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerInteractEntityEvent } from '../../../../org/bukkit/event/player/PlayerInteractEntityEvent.js';
export interface PlayerArmorStandManipulateEvent extends PlayerInteractEntityEvent {
    getSlot(): EquipmentSlot;
    getHandlers(): HandlerList;
    getPlayerItem(): ItemStack;
    getRightClicked(): Entity;
    getRightClicked(): ArmorStand;
    getArmorStandItem(): ItemStack;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getHand(): EquipmentSlot;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerArmorStandManipulateEvent {
    static get $javaClass(): any;
    constructor(who: Player, clickedEntity: ArmorStand, playerItem: ItemStack, armorStandItem: ItemStack, slot: EquipmentSlot);
    static getHandlerList(): HandlerList;
}
