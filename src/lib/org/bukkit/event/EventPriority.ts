declare var Java: any;

export default interface EventPriority {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

