import { LightningStrikeEvent$Cause } from '../../../../org/bukkit/event/weather/LightningStrikeEvent$Cause.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { LightningStrike } from '../../../../org/bukkit/entity/LightningStrike.js';
import { World } from '../../../../org/bukkit/World.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { WeatherEvent } from '../../../../org/bukkit/event/weather/WeatherEvent.js';
export interface LightningStrikeEvent extends WeatherEvent, Cancellable {
    getCause(): LightningStrikeEvent$Cause;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getLightning(): LightningStrike;
    getWorld(): World;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class LightningStrikeEvent {
    static get $javaClass(): any;
    constructor(world: World, bolt: LightningStrike, cause: LightningStrikeEvent$Cause);
    constructor(world: World, bolt: LightningStrike);
    static getHandlerList(): HandlerList;
}
