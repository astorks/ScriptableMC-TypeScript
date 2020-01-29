import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerExpChangeEvent extends PlayerEvent {
    getAmount(): number;
    setAmount(amount: number): void;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerExpChangeEvent {
    static get $javaClass(): any;
    constructor(player: Player, expAmount: number);
    static getHandlerList(): HandlerList;
}
