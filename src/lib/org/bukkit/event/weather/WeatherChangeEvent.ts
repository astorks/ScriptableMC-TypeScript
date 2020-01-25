declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {World} from '../../../../org/bukkit/World.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {WeatherEvent} from '../../../../org/bukkit/event/weather/WeatherEvent.js'

export interface WeatherChangeEvent extends WeatherEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	toWeatherState(): boolean;
	getWorld(): World;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class WeatherChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.weather.WeatherChangeEvent');
	}
	constructor(world: World, to: boolean);
	constructor(...args: any[]) {
		return new WeatherChangeEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return WeatherChangeEvent.$javaClass.getHandlerList(...args);
	}
}
