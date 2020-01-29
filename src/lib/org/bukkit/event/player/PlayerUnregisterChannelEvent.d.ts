import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerChannelEvent } from '../../../../org/bukkit/event/player/PlayerChannelEvent.js';
export interface PlayerUnregisterChannelEvent extends PlayerChannelEvent {
    getChannel(): string;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerUnregisterChannelEvent {
    static get $javaClass(): any;
    constructor(player: Player, channel: string);
    static getHandlerList(): HandlerList;
}
