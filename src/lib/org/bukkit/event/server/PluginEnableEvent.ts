declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Plugin from '../../../../org/bukkit/plugin/Plugin.js'
import PluginEvent from '../../../../org/bukkit/event/server/PluginEvent.js'

export default interface PluginEnableEvent extends PluginEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlugin(): Plugin;
	isAsynchronous(): boolean;
}

export default class PluginEnableEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.PluginEnableEvent');
	}

	constructor(plugin: Plugin);
	constructor(...args: any[]) {
		return new PluginEnableEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PluginEnableEvent.$javaClass.getHandlerList(...args);
	}

}

