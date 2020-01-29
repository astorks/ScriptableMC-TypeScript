import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerCommandSendEvent extends PlayerEvent {
    getCommands(): any;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerCommandSendEvent {
    static get $javaClass(): any;
    constructor(player: Player, commands: any);
    static getHandlerList(): HandlerList;
}
