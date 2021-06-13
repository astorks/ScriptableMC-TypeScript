declare var Java: any;

export default interface TimeSkipEvent$SkipReason {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class TimeSkipEvent$SkipReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.TimeSkipEvent$SkipReason');
	}

	public static get COMMAND(): TimeSkipEvent$SkipReason {
		return this.$javaClass.COMMAND;
	}
	public static get CUSTOM(): TimeSkipEvent$SkipReason {
		return this.$javaClass.CUSTOM;
	}
	public static get NIGHT_SKIP(): TimeSkipEvent$SkipReason {
		return this.$javaClass.NIGHT_SKIP;
	}
	public static valueOf(arg0: string): TimeSkipEvent$SkipReason;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return TimeSkipEvent$SkipReason.$javaClass.valueOf(...args);
	}

	public static values(): Array<TimeSkipEvent$SkipReason>;
	public static values(...args: any[]): any {
		return TimeSkipEvent$SkipReason.$javaClass.values(...args);
	}

}

