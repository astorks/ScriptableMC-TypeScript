declare var Java: any;

export default interface EventPriority {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	getSlot(): number;
	name(): string;
	ordinal(): number;
}

export default class EventPriority {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.EventPriority');
	}

	public static get HIGH(): EventPriority {
		return this.$javaClass.HIGH;
	}
	public static get HIGHEST(): EventPriority {
		return this.$javaClass.HIGHEST;
	}
	public static get LOW(): EventPriority {
		return this.$javaClass.LOW;
	}
	public static get LOWEST(): EventPriority {
		return this.$javaClass.LOWEST;
	}
	public static get MONITOR(): EventPriority {
		return this.$javaClass.MONITOR;
	}
	public static get NORMAL(): EventPriority {
		return this.$javaClass.NORMAL;
	}
	public static valueOf(arg0: string): EventPriority;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return EventPriority.$javaClass.valueOf(...args);
	}

	public static values(): Array<EventPriority>;
	public static values(...args: any[]): any {
		return EventPriority.$javaClass.values(...args);
	}

}

