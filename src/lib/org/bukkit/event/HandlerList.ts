declare var Java: any;
import Listener from '../../../org/bukkit/event/Listener.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import RegisteredListener from '../../../org/bukkit/plugin/RegisteredListener.js'

export default interface HandlerList {
	unregister(listener: Listener): void;
	unregister(plugin: Plugin): void;
	unregister(listener: RegisteredListener): void;
	registerAll(listeners: any): void;
	getRegisteredListeners(): Array<RegisteredListener>;
	bake(): void;
	register(listener: RegisteredListener): void;
}

export default class HandlerList {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.HandlerList');
	}
	constructor();
	constructor(...args: any[]) {
		return new HandlerList.$javaClass(...args);
	}
	public static unregisterAll(listener: Listener): void;
	public static unregisterAll(): void;
	public static unregisterAll(plugin: Plugin): void;
	public static unregisterAll(...args: any[]): any {
		return HandlerList.$javaClass.unregisterAll(...args);
	}
	public static getRegisteredListeners(plugin: Plugin): any;
	public static getRegisteredListeners(...args: any[]): any {
		return HandlerList.$javaClass.getRegisteredListeners(...args);
	}
	public static getHandlerLists(): any;
	public static getHandlerLists(...args: any[]): any {
		return HandlerList.$javaClass.getHandlerLists(...args);
	}
	public static bakeAll(): void;
	public static bakeAll(...args: any[]): any {
		return HandlerList.$javaClass.bakeAll(...args);
	}
}

