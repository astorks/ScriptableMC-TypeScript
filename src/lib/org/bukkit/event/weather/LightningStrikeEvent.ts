declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {LightningStrike} from '../../../../org/bukkit/entity/LightningStrike.js'
import {LightningStrikeEvent$Cause} from '../../../../org/bukkit/event/weather/LightningStrikeEvent$Cause.js'
import {World} from '../../../../org/bukkit/World.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {WeatherEvent} from '../../../../org/bukkit/event/weather/WeatherEvent.js'

export interface LightningStrikeEvent extends WeatherEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getLightning(): LightningStrike;
	getCause(): LightningStrikeEvent$Cause;
	getWorld(): World;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class LightningStrikeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.weather.LightningStrikeEvent');
	}
	constructor(world: World, bolt: LightningStrike, cause: LightningStrikeEvent$Cause);
	constructor(world: World, bolt: LightningStrike);
	constructor(...args: any[]) {
		return new LightningStrikeEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return LightningStrikeEvent.$javaClass.getHandlerList(...args);
	}
}

