import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerKickEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setReason(kickReason: string): void;
    getReason(): string;
    getLeaveMessage(): string;
    setLeaveMessage(leaveMessage: string): void;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerKickEvent {
    static get $javaClass(): any;
    constructor(playerKicked: Player, kickReason: string, leaveMessage: string);
    static getHandlerList(): HandlerList;
}
