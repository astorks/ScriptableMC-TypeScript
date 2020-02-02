import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Raid from '../../../../org/bukkit/Raid.js';
import RaidEvent from '../../../../org/bukkit/event/raid/RaidEvent.js';
import World from '../../../../org/bukkit/World.js';
export default interface RaidFinishEvent extends RaidEvent {
    getHandlers(): HandlerList;
    getWinners(): any;
    getRaid(): Raid;
    getWorld(): World;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class RaidFinishEvent {
    static get $javaClass(): any;
    constructor(raid: Raid, world: World, winners: any);
    static getHandlerList(): HandlerList;
}
