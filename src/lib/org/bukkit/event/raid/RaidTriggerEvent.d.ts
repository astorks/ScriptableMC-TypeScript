import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import Raid from '../../../../org/bukkit/Raid.js';
import RaidEvent from '../../../../org/bukkit/event/raid/RaidEvent.js';
import World from '../../../../org/bukkit/World.js';
export default interface RaidTriggerEvent extends RaidEvent, Cancellable {
    getPlayer(): Player;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getRaid(): Raid;
    getWorld(): World;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class RaidTriggerEvent {
    static get $javaClass(): any;
    constructor(raid: Raid, world: World, player: Player);
    static getHandlerList(): HandlerList;
}
