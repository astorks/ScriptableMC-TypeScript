declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Plugin from '../../../../org/bukkit/plugin/Plugin.js'
import ServerEvent from '../../../../org/bukkit/event/server/ServerEvent.js'

export default interface PluginEvent extends ServerEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlugin(): Plugin;
	isAsynchronous(): boolean;
}

export default class PluginEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.PluginEvent');
	}

	constructor(plugin: Plugin);
	constructor(...args: any[]) {
		return new PluginEvent.$javaClass(...args);
	}

}

