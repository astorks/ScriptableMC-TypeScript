import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Raid from '../../../../org/bukkit/Raid.js';
import RaidEvent from '../../../../org/bukkit/event/raid/RaidEvent.js';
import RaidStopEvent$Reason from '../../../../org/bukkit/event/raid/RaidStopEvent$Reason.js';
import World from '../../../../org/bukkit/World.js';
export default interface RaidStopEvent extends RaidEvent {
    getHandlers(): HandlerList;
    getReason(): RaidStopEvent$Reason;
    getRaid(): Raid;
    getWorld(): World;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class RaidStopEvent {
    static get $javaClass(): any;
    constructor(raid: Raid, world: World, reason: RaidStopEvent$Reason);
    static getHandlerList(): HandlerList;
}
