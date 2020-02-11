import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import GameMode from '../../../../org/bukkit/GameMode.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerGameModeChangeEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getNewGameMode(): GameMode;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerGameModeChangeEvent {
    static get $javaClass(): any;
    constructor(player: Player, newGameMode: GameMode);
    static getHandlerList(): HandlerList;
}
