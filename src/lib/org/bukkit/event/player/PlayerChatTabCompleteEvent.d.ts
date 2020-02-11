import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerChatTabCompleteEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getChatMessage(): string;
    getTabCompletions(): any;
    getLastToken(): string;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerChatTabCompleteEvent {
    static get $javaClass(): any;
    constructor(who: Player, message: string, completions: any);
    static getHandlerList(): HandlerList;
}
