import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { GameMode } from '../../../../org/bukkit/GameMode.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerGameModeChangeEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getNewGameMode(): GameMode;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerGameModeChangeEvent {
    static get $javaClass(): any;
    constructor(player: Player, newGameMode: GameMode);
    static getHandlerList(): HandlerList;
}
