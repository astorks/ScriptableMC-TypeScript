import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerToggleSneakEvent extends PlayerEvent, Cancellable {
    isSneaking(): boolean;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerToggleSneakEvent {
    static get $javaClass(): any;
    constructor(player: Player, isSneaking: boolean);
    static getHandlerList(): HandlerList;
}
