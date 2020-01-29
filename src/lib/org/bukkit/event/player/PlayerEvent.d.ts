import { Player } from '../../../../org/bukkit/entity/Player.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Event } from '../../../../org/bukkit/event/Event.js';
export interface PlayerEvent extends Event {
    getPlayer(): Player;
    getHandlers(): HandlerList;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerEvent {
    static get $javaClass(): any;
    constructor(who: Player);
}
