declare var Java: any;

export default interface PortalCreateEvent$CreateReason {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class PortalCreateEvent$CreateReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.PortalCreateEvent$CreateReason');
	}

	public static get END_PLATFORM(): PortalCreateEvent$CreateReason {
		return this.$javaClass.END_PLATFORM;
	}
	public static get FIRE(): PortalCreateEvent$CreateReason {
		return this.$javaClass.FIRE;
	}
	public static get NETHER_PAIR(): PortalCreateEvent$CreateReason {
		return this.$javaClass.NETHER_PAIR;
	}
	public static valueOf(arg0: string): PortalCreateEvent$CreateReason;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return PortalCreateEvent$CreateReason.$javaClass.valueOf(...args);
	}

	public static values(): Array<PortalCreateEvent$CreateReason>;
	public static values(...args: any[]): any {
		return PortalCreateEvent$CreateReason.$javaClass.values(...args);
	}

}

