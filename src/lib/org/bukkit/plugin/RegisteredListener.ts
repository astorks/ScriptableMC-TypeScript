declare var Java: any;
import Event from '../../../org/bukkit/event/Event.js'
import EventExecutor from '../../../org/bukkit/plugin/EventExecutor.js'
import EventPriority from '../../../org/bukkit/event/EventPriority.js'
import Listener from '../../../org/bukkit/event/Listener.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface RegisteredListener {
	callEvent(event: Event): void;
	getListener(): Listener;
	getPlugin(): Plugin;
	getPriority(): EventPriority;
	isIgnoringCancelled(): boolean;
}

export default class RegisteredListener {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.RegisteredListener');
	}

	constructor(listener: Listener, executor: EventExecutor, priority: EventPriority, plugin: Plugin, ignoreCancelled: boolean);
	constructor(...args: any[]) {
		return new RegisteredListener.$javaClass(...args);
	}

}

