import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerToggleSprintEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isSprinting(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerToggleSprintEvent {
    static get $javaClass(): any;
    constructor(player: Player, isSprinting: boolean);
    static getHandlerList(): HandlerList;
}
