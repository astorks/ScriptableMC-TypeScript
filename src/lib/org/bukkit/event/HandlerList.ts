declare var Java: any;
import Listener from '../../../org/bukkit/event/Listener.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import RegisteredListener from '../../../org/bukkit/plugin/RegisteredListener.js'

export default interface HandlerList {
	bake(): void;
	getRegisteredListeners(): Array<RegisteredListener>;
	register(listener: RegisteredListener): void;
	registerAll(listeners: any): void;
	unregister(listener: Listener): void;
	unregister(listener: RegisteredListener): void;
	unregister(plugin: Plugin): void;
}

export default class HandlerList {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.HandlerList');
	}

	constructor();
	constructor(...args: any[]) {
		return new HandlerList.$javaClass(...args);
	}

	public static bakeAll(): void;
	public static bakeAll(...args: any[]): any {
		return HandlerList.$javaClass.bakeAll(...args);
	}

	public static getHandlerLists(): any;
	public static getHandlerLists(...args: any[]): any {
		return HandlerList.$javaClass.getHandlerLists(...args);
	}

	public static getRegisteredListeners(plugin: Plugin): any;
	public static getRegisteredListeners(...args: any[]): any {
		return HandlerList.$javaClass.getRegisteredListeners(...args);
	}

	public static unregisterAll(): void;
	public static unregisterAll(plugin: Plugin): void;
	public static unregisterAll(listener: Listener): void;
	public static unregisterAll(...args: any[]): any {
		return HandlerList.$javaClass.unregisterAll(...args);
	}

}

