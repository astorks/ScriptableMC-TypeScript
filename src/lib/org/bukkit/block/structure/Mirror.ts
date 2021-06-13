declare var Java: any;

export default interface Mirror {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Mirror {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.structure.Mirror');
	}

	public static get FRONT_BACK(): Mirror {
		return this.$javaClass.FRONT_BACK;
	}
	public static get LEFT_RIGHT(): Mirror {
		return this.$javaClass.LEFT_RIGHT;
	}
	public static get NONE(): Mirror {
		return this.$javaClass.NONE;
	}
	public static valueOf(arg0: string): Mirror;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Mirror.$javaClass.valueOf(...args);
	}

	public static values(): Array<Mirror>;
	public static values(...args: any[]): any {
		return Mirror.$javaClass.values(...args);
	}

}

