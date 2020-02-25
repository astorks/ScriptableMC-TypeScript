declare var Java: any;
import Event from '../../../../org/bukkit/event/Event.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Hanging from '../../../../org/bukkit/entity/Hanging.js'

export default interface HangingEvent extends Event {
	getEntity(): Hanging;
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
}

export default class HangingEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.hanging.HangingEvent');
	}

}

