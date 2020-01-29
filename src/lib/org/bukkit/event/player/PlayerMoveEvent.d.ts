import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Location } from '../../../../org/bukkit/Location.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerMoveEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getFrom(): Location;
    getTo(): Location;
    setFrom(from: Location): void;
    setTo(to: Location): void;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerMoveEvent {
    static get $javaClass(): any;
    constructor(player: Player, from: Location, to: Location);
    static getHandlerList(): HandlerList;
}
