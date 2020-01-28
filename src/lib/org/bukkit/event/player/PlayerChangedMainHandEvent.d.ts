import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { MainHand } from '../../../../org/bukkit/inventory/MainHand.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerChangedMainHandEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getMainHand(): MainHand;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerChangedMainHandEvent {
    static get $javaClass(): any;
    constructor(who: Player, mainHand: MainHand);
    static getHandlerList(): HandlerList;
}
