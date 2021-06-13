declare var Java: any;

export default interface BigDripleaf$Tilt {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class BigDripleaf$Tilt {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.BigDripleaf$Tilt');
	}

	public static get FULL(): BigDripleaf$Tilt {
		return this.$javaClass.FULL;
	}
	public static get NONE(): BigDripleaf$Tilt {
		return this.$javaClass.NONE;
	}
	public static get PARTIAL(): BigDripleaf$Tilt {
		return this.$javaClass.PARTIAL;
	}
	public static get UNSTABLE(): BigDripleaf$Tilt {
		return this.$javaClass.UNSTABLE;
	}
	public static valueOf(arg0: string): BigDripleaf$Tilt;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return BigDripleaf$Tilt.$javaClass.valueOf(...args);
	}

	public static values(): Array<BigDripleaf$Tilt>;
	public static values(...args: any[]): any {
		return BigDripleaf$Tilt.$javaClass.values(...args);
	}

}

