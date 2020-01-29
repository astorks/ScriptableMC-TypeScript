import { MainHand } from '../../../../org/bukkit/inventory/MainHand.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerChangedMainHandEvent extends PlayerEvent {
    getMainHand(): MainHand;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerChangedMainHandEvent {
    static get $javaClass(): any;
    constructor(who: Player, mainHand: MainHand);
    static getHandlerList(): HandlerList;
}
