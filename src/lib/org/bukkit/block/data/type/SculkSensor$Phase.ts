declare var Java: any;

export default interface SculkSensor$Phase {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class SculkSensor$Phase {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.SculkSensor$Phase');
	}

	public static get ACTIVE(): SculkSensor$Phase {
		return this.$javaClass.ACTIVE;
	}
	public static get COOLDOWN(): SculkSensor$Phase {
		return this.$javaClass.COOLDOWN;
	}
	public static get INACTIVE(): SculkSensor$Phase {
		return this.$javaClass.INACTIVE;
	}
	public static valueOf(arg0: string): SculkSensor$Phase;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return SculkSensor$Phase.$javaClass.valueOf(...args);
	}

	public static values(): Array<SculkSensor$Phase>;
	public static values(...args: any[]): any {
		return SculkSensor$Phase.$javaClass.values(...args);
	}

}

