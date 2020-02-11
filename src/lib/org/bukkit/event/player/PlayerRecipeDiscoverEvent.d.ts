import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import NamespacedKey from '../../../../org/bukkit/NamespacedKey.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerRecipeDiscoverEvent extends PlayerEvent, Cancellable {
    getRecipe(): NamespacedKey;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerRecipeDiscoverEvent {
    static get $javaClass(): any;
    constructor(who: Player, recipe: NamespacedKey);
    static getHandlerList(): HandlerList;
}
