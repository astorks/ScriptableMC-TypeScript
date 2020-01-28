import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Advancement } from '../../../../org/bukkit/advancement/Advancement.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerAdvancementDoneEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getAdvancement(): Advancement;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerAdvancementDoneEvent {
    static get $javaClass(): any;
    constructor(who: Player, advancement: Advancement);
    static getHandlerList(): HandlerList;
}
