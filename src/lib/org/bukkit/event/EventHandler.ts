declare var Java: any;
import EventPriority from '../../../org/bukkit/event/EventPriority.js'

export default interface EventHandler {
	annotationType(): any;
	ignoreCancelled(): boolean;
	priority(): EventPriority;
}

export default class EventHandler {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.EventHandler');
	}

}

