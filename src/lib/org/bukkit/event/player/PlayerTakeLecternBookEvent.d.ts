import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Lectern from '../../../../org/bukkit/block/Lectern.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerTakeLecternBookEvent extends PlayerEvent, Cancellable {
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getBook(): ItemStack;
    getLectern(): Lectern;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerTakeLecternBookEvent {
    static get $javaClass(): any;
    constructor(who: Player, lectern: Lectern);
    static getHandlerList(): HandlerList;
}
