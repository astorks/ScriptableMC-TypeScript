import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerExpChangeEvent extends PlayerEvent {
    setAmount(amount: number): void;
    getAmount(): number;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerExpChangeEvent {
    static get $javaClass(): any;
    constructor(player: Player, expAmount: number);
    static getHandlerList(): HandlerList;
}
