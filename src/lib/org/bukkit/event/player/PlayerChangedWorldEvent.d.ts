import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
import World from '../../../../org/bukkit/World.js';
export default interface PlayerChangedWorldEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getFrom(): World;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerChangedWorldEvent {
    static get $javaClass(): any;
    constructor(player: Player, from: World);
    static getHandlerList(): HandlerList;
}
