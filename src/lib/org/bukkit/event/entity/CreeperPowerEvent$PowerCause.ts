declare var Java: any;

export default interface CreeperPowerEvent$PowerCause {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class CreeperPowerEvent$PowerCause {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.CreeperPowerEvent$PowerCause');
	}

	public static get LIGHTNING(): CreeperPowerEvent$PowerCause {
		return this.$javaClass.LIGHTNING;
	}
	public static get SET_OFF(): CreeperPowerEvent$PowerCause {
		return this.$javaClass.SET_OFF;
	}
	public static get SET_ON(): CreeperPowerEvent$PowerCause {
		return this.$javaClass.SET_ON;
	}
	public static valueOf(arg0: string): CreeperPowerEvent$PowerCause;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return CreeperPowerEvent$PowerCause.$javaClass.valueOf(...args);
	}

	public static values(): Array<CreeperPowerEvent$PowerCause>;
	public static values(...args: any[]): any {
		return CreeperPowerEvent$PowerCause.$javaClass.values(...args);
	}

}

