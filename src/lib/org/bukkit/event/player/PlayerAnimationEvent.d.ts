import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { PlayerAnimationType } from '../../../../org/bukkit/event/player/PlayerAnimationType.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerAnimationEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getAnimationType(): PlayerAnimationType;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerAnimationEvent {
    static get $javaClass(): any;
    constructor(player: Player);
    static getHandlerList(): HandlerList;
}
