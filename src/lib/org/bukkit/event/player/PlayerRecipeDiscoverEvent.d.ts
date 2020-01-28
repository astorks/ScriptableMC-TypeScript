import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { NamespacedKey } from '../../../../org/bukkit/NamespacedKey.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerRecipeDiscoverEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    getRecipe(): NamespacedKey;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerRecipeDiscoverEvent {
    static get $javaClass(): any;
    constructor(who: Player, recipe: NamespacedKey);
    static getHandlerList(): HandlerList;
}
