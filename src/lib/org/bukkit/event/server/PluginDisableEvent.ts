declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Plugin from '../../../../org/bukkit/plugin/Plugin.js'
import PluginEvent from '../../../../org/bukkit/event/server/PluginEvent.js'

export default interface PluginDisableEvent extends PluginEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlugin(): Plugin;
	isAsynchronous(): boolean;
}

export default class PluginDisableEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.PluginDisableEvent');
	}

	constructor(plugin: Plugin);
	constructor(...args: any[]) {
		return new PluginDisableEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PluginDisableEvent.$javaClass.getHandlerList(...args);
	}

}

