import { World } from '../../../../org/bukkit/World.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Event } from '../../../../org/bukkit/event/Event.js';
export interface WeatherEvent extends Event {
    getWorld(): World;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class WeatherEvent {
    static get $javaClass(): any;
    constructor(where: World);
}
