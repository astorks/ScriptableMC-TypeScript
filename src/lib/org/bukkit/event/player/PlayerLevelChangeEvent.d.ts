import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerLevelChangeEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getOldLevel(): number;
    getNewLevel(): number;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerLevelChangeEvent {
    static get $javaClass(): any;
    constructor(player: Player, oldLevel: number, newLevel: number);
    static getHandlerList(): HandlerList;
}
