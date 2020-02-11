import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerToggleSneakEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isSneaking(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerToggleSneakEvent {
    static get $javaClass(): any;
    constructor(player: Player, isSneaking: boolean);
    static getHandlerList(): HandlerList;
}
