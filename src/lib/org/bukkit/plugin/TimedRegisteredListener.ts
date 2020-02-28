declare var Java: any;
import Event from '../../../org/bukkit/event/Event.js'
import EventExecutor from './EventExecutor.js'
import EventPriority from '../../../org/bukkit/event/EventPriority.js'
import Listener from '../../../org/bukkit/event/Listener.js'
import Plugin from './Plugin.js'
import RegisteredListener from './RegisteredListener.js'

export default interface TimedRegisteredListener extends RegisteredListener {
	callEvent(event: Event): void;
	getCount(): number;
	getEventClass(): any;
	getListener(): Listener;
	getPlugin(): Plugin;
	getPriority(): EventPriority;
	getTotalTime(): number;
	hasMultiple(): boolean;
	isIgnoringCancelled(): boolean;
	reset(): void;
}

export default class TimedRegisteredListener {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.TimedRegisteredListener');
	}

	constructor(pluginListener: Listener, eventExecutor: EventExecutor, eventPriority: EventPriority, registeredPlugin: Plugin, listenCancelled: boolean);
	constructor(...args: any[]) {
		return new TimedRegisteredListener.$javaClass(...args);
	}

}

