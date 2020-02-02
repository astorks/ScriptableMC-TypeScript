import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerChannelEvent from '../../../../org/bukkit/event/player/PlayerChannelEvent.js';
export default interface PlayerRegisterChannelEvent extends PlayerChannelEvent {
    getHandlers(): HandlerList;
    getChannel(): string;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerRegisterChannelEvent {
    static get $javaClass(): any;
    constructor(player: Player, channel: string);
    static getHandlerList(): HandlerList;
}
