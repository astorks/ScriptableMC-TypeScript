import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import FishHook from '../../../../org/bukkit/entity/FishHook.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
import PlayerFishEvent$State from '../../../../org/bukkit/event/player/PlayerFishEvent$State.js';
export default interface PlayerFishEvent extends PlayerEvent, Cancellable {
    getState(): PlayerFishEvent$State;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getHook(): FishHook;
    getCaught(): Entity;
    setExpToDrop(amount: number): void;
    getExpToDrop(): number;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerFishEvent {
    static get $javaClass(): any;
    constructor(player: Player, entity: Entity, hookEntity: FishHook, state: PlayerFishEvent$State);
    static getHandlerList(): HandlerList;
}
