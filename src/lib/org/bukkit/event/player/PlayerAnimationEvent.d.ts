import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerAnimationType from '../../../../org/bukkit/event/player/PlayerAnimationType.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerAnimationEvent extends PlayerEvent, Cancellable {
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getAnimationType(): PlayerAnimationType;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerAnimationEvent {
    static get $javaClass(): any;
    constructor(player: Player);
    static getHandlerList(): HandlerList;
}
