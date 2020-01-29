import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { World } from '../../../../org/bukkit/World.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerChangedWorldEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getFrom(): World;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerChangedWorldEvent {
    static get $javaClass(): any;
    constructor(player: Player, from: World);
    static getHandlerList(): HandlerList;
}
