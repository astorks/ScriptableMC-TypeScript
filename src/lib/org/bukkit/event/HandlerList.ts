declare var Java: any;
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Listener} from '../../../org/bukkit/event/Listener.js'
import {RegisteredListener} from '../../../org/bukkit/plugin/RegisteredListener.js'

export interface HandlerList {
	unregister(plugin: Plugin): void;
	unregister(listener: RegisteredListener): void;
	unregister(listener: Listener): void;
	registerAll(listeners: any): void;
	bake(): void;
	getRegisteredListeners(): Array<RegisteredListener>;
	register(listener: RegisteredListener): void;
}

export class HandlerList {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.HandlerList');
	}
	constructor();
	constructor(...args: any[]) {
		return new HandlerList.$javaClass(...args);
	}
	public static unregisterAll(plugin: Plugin): void;
	public static unregisterAll(): void;
	public static unregisterAll(listener: Listener): void;
	public static unregisterAll(...args: any[]): any {
		return HandlerList.$javaClass.unregisterAll(...args);
	}
	public static getHandlerLists(): any;
	public static getHandlerLists(...args: any[]): any {
		return HandlerList.$javaClass.getHandlerLists(...args);
	}
	public static bakeAll(): void;
	public static bakeAll(...args: any[]): any {
		return HandlerList.$javaClass.bakeAll(...args);
	}
	public static getRegisteredListeners(plugin: Plugin): any;
	public static getRegisteredListeners(...args: any[]): any {
		return HandlerList.$javaClass.getRegisteredListeners(...args);
	}
}

