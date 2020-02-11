import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Raid from '../../../../org/bukkit/Raid.js';
import World from '../../../../org/bukkit/World.js';
import WorldEvent from '../../../../org/bukkit/event/world/WorldEvent.js';
export default interface RaidEvent extends WorldEvent {
    getRaid(): Raid;
    getWorld(): World;
    getEventName(): string;
    isAsynchronous(): boolean;
    getHandlers(): HandlerList;
}
export default class RaidEvent {
    static get $javaClass(): any;
}
