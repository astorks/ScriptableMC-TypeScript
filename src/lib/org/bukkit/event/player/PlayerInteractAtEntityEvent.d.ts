import Entity from '../../../../org/bukkit/entity/Entity.js';
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerInteractEntityEvent from '../../../../org/bukkit/event/player/PlayerInteractEntityEvent.js';
import Vector from '../../../../org/bukkit/util/Vector.js';
export default interface PlayerInteractAtEntityEvent extends PlayerInteractEntityEvent {
    getHandlers(): HandlerList;
    getClickedPosition(): Vector;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getRightClicked(): Entity;
    getHand(): EquipmentSlot;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerInteractAtEntityEvent {
    static get $javaClass(): any;
    constructor(who: Player, clickedEntity: Entity, position: Vector, hand: EquipmentSlot);
    constructor(who: Player, clickedEntity: Entity, position: Vector);
    static getHandlerList(): HandlerList;
}
