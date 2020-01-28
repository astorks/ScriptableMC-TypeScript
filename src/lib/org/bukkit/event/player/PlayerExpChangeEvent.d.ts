import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerExpChangeEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getAmount(): number;
    setAmount(amount: number): void;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerExpChangeEvent {
    static get $javaClass(): any;
    constructor(player: Player, expAmount: number);
    static getHandlerList(): HandlerList;
}
