declare var Java: any;

export default interface LightningStrikeEvent$Cause {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class LightningStrikeEvent$Cause {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.weather.LightningStrikeEvent$Cause');
	}

	public static get COMMAND(): LightningStrikeEvent$Cause {
		return this.$javaClass.COMMAND;
	}
	public static get TRAP(): LightningStrikeEvent$Cause {
		return this.$javaClass.TRAP;
	}
	public static get TRIDENT(): LightningStrikeEvent$Cause {
		return this.$javaClass.TRIDENT;
	}
	public static get UNKNOWN(): LightningStrikeEvent$Cause {
		return this.$javaClass.UNKNOWN;
	}
	public static get WEATHER(): LightningStrikeEvent$Cause {
		return this.$javaClass.WEATHER;
	}
	public static valueOf(arg0: string): LightningStrikeEvent$Cause;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return LightningStrikeEvent$Cause.$javaClass.valueOf(...args);
	}

	public static values(): Array<LightningStrikeEvent$Cause>;
	public static values(...args: any[]): any {
		return LightningStrikeEvent$Cause.$javaClass.values(...args);
	}

}

