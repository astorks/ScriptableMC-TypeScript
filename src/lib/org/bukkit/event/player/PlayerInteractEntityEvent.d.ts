import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EquipmentSlot } from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerInteractEntityEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getHand(): EquipmentSlot;
    getRightClicked(): Entity;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerInteractEntityEvent {
    static get $javaClass(): any;
    constructor(who: Player, clickedEntity: Entity, hand: EquipmentSlot);
    constructor(who: Player, clickedEntity: Entity);
    static getHandlerList(): HandlerList;
}
