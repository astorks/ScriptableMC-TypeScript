declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import WeatherEvent from '../../../../org/bukkit/event/weather/WeatherEvent.js'
import World from '../../../../org/bukkit/World.js'

export default interface ThunderChangeEvent extends WeatherEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getWorld(): World;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	toThunderState(): boolean;
}

export default class ThunderChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.weather.ThunderChangeEvent');
	}

	constructor(world: World, to: boolean);
	constructor(...args: any[]) {
		return new ThunderChangeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ThunderChangeEvent.$javaClass.getHandlerList(...args);
	}

}

