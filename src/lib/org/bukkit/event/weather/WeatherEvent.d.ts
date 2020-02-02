import Event from '../../../../org/bukkit/event/Event.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import World from '../../../../org/bukkit/World.js';
export default interface WeatherEvent extends Event {
    getWorld(): World;
    getHandlers(): HandlerList;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class WeatherEvent {
    static get $javaClass(): any;
    constructor(where: World);
}
