import { PlayerFishEvent$State } from '../../../../org/bukkit/event/player/PlayerFishEvent$State.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { FishHook } from '../../../../org/bukkit/entity/FishHook.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerFishEvent extends PlayerEvent, Cancellable {
    getState(): PlayerFishEvent$State;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setExpToDrop(amount: number): void;
    getExpToDrop(): number;
    getCaught(): Entity;
    getHook(): FishHook;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerFishEvent {
    static get $javaClass(): any;
    constructor(player: Player, entity: Entity, hookEntity: FishHook, state: PlayerFishEvent$State);
    static getHandlerList(): HandlerList;
}
