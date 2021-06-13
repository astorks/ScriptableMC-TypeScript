declare var Java: any;

export default interface NetherWartsState {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class NetherWartsState {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.NetherWartsState');
	}

	public static get RIPE(): NetherWartsState {
		return this.$javaClass.RIPE;
	}
	public static get SEEDED(): NetherWartsState {
		return this.$javaClass.SEEDED;
	}
	public static get STAGE_ONE(): NetherWartsState {
		return this.$javaClass.STAGE_ONE;
	}
	public static get STAGE_TWO(): NetherWartsState {
		return this.$javaClass.STAGE_TWO;
	}
	public static valueOf(arg0: string): NetherWartsState;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return NetherWartsState.$javaClass.valueOf(...args);
	}

	public static values(): Array<NetherWartsState>;
	public static values(...args: any[]): any {
		return NetherWartsState.$javaClass.values(...args);
	}

}

