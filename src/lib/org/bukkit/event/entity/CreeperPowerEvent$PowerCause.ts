declare var Java: any;

export default interface CreeperPowerEvent$PowerCause {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

