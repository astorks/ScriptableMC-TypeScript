import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerCommandSendEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getCommands(): any;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerCommandSendEvent {
    static get $javaClass(): any;
    constructor(player: Player, commands: any);
    static getHandlerList(): HandlerList;
}
