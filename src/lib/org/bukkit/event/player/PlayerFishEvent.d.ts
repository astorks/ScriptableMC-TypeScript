import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { FishHook } from '../../../../org/bukkit/entity/FishHook.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { PlayerFishEvent$State } from '../../../../org/bukkit/event/player/PlayerFishEvent$State.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerFishEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getExpToDrop(): number;
    setExpToDrop(amount: number): void;
    getHook(): FishHook;
    getCaught(): Entity;
    getState(): PlayerFishEvent$State;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerFishEvent {
    static get $javaClass(): any;
    constructor(player: Player, entity: Entity, hookEntity: FishHook, state: PlayerFishEvent$State);
    static getHandlerList(): HandlerList;
}
