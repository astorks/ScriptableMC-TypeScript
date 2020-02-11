import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
import PlayerResourcePackStatusEvent$Status from '../../../../org/bukkit/event/player/PlayerResourcePackStatusEvent$Status.js';
export default interface PlayerResourcePackStatusEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getStatus(): PlayerResourcePackStatusEvent$Status;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerResourcePackStatusEvent {
    static get $javaClass(): any;
    constructor(who: Player, resourcePackStatus: PlayerResourcePackStatusEvent$Status);
    static getHandlerList(): HandlerList;
}
