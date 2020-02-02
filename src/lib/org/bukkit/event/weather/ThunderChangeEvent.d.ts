import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import WeatherEvent from '../../../../org/bukkit/event/weather/WeatherEvent.js';
import World from '../../../../org/bukkit/World.js';
export default interface ThunderChangeEvent extends WeatherEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    toThunderState(): boolean;
    getWorld(): World;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class ThunderChangeEvent {
    static get $javaClass(): any;
    constructor(world: World, to: boolean);
    static getHandlerList(): HandlerList;
}
