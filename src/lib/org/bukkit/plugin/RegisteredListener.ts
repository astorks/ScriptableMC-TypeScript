declare var Java: any;
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Listener} from '../../../org/bukkit/event/Listener.js'
import {Event} from '../../../org/bukkit/event/Event.js'
import {EventPriority} from '../../../org/bukkit/event/EventPriority.js'
import {EventExecutor} from '../../../org/bukkit/plugin/EventExecutor.js'

export interface RegisteredListener {
	getPlugin(): Plugin;
	getListener(): Listener;
	callEvent(event: Event): void;
	isIgnoringCancelled(): boolean;
	getPriority(): EventPriority;
}

export class RegisteredListener {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.RegisteredListener');
	}
	constructor(listener: Listener, executor: EventExecutor, priority: EventPriority, plugin: Plugin, ignoreCancelled: boolean);
	constructor(...args: any[]) {
		return new RegisteredListener.$javaClass(...args);
	}
}

