import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { PlayerResourcePackStatusEvent$Status } from '../../../../org/bukkit/event/player/PlayerResourcePackStatusEvent$Status.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerResourcePackStatusEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getStatus(): PlayerResourcePackStatusEvent$Status;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerResourcePackStatusEvent {
    static get $javaClass(): any;
    constructor(who: Player, resourcePackStatus: PlayerResourcePackStatusEvent$Status);
    static getHandlerList(): HandlerList;
}
