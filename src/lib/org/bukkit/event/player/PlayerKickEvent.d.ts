import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerKickEvent extends PlayerEvent, Cancellable {
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    setReason(kickReason: string): void;
    getReason(): string;
    setLeaveMessage(leaveMessage: string): void;
    getLeaveMessage(): string;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerKickEvent {
    static get $javaClass(): any;
    constructor(playerKicked: Player, kickReason: string, leaveMessage: string);
    static getHandlerList(): HandlerList;
}
