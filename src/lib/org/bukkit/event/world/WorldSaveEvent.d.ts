import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import World from '../../../../org/bukkit/World.js';
import WorldEvent from '../../../../org/bukkit/event/world/WorldEvent.js';
export default interface WorldSaveEvent extends WorldEvent {
    getHandlers(): HandlerList;
    getWorld(): World;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class WorldSaveEvent {
    static get $javaClass(): any;
    constructor(world: World);
    static getHandlerList(): HandlerList;
}
