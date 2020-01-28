import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerLocaleChangeEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getLocale(): string;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerLocaleChangeEvent {
    static get $javaClass(): any;
    constructor(who: Player, locale: string);
    static getHandlerList(): HandlerList;
}
