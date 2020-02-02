import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerLocaleChangeEvent extends PlayerEvent {
    getLocale(): string;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerLocaleChangeEvent {
    static get $javaClass(): any;
    constructor(who: Player, locale: string);
    static getHandlerList(): HandlerList;
}
