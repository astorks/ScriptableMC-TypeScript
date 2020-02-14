declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import WeatherEvent from '../../../../org/bukkit/event/weather/WeatherEvent.js'
import World from '../../../../org/bukkit/World.js'

export default interface WeatherChangeEvent extends WeatherEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	toWeatherState(): boolean;
	getWorld(): World;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class WeatherChangeEvent {
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

