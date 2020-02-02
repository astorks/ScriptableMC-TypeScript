import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import FishHook from '../../../../org/bukkit/entity/FishHook.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
import PlayerFishEvent$State from '../../../../org/bukkit/event/player/PlayerFishEvent$State.js';
export default interface PlayerFishEvent extends PlayerEvent, Cancellable {
    getState(): PlayerFishEvent$State;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getExpToDrop(): number;
    setExpToDrop(amount: number): void;
    getCaught(): Entity;
    getHook(): FishHook;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerFishEvent {
    static get $javaClass(): any;
    constructor(player: Player, entity: Entity, hookEntity: FishHook, state: PlayerFishEvent$State);
    static getHandlerList(): HandlerList;
}
