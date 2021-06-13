declare var Java: any;

export default interface Wall$Height {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Wall$Height {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Wall$Height');
	}

	public static get LOW(): Wall$Height {
		return this.$javaClass.LOW;
	}
	public static get NONE(): Wall$Height {
		return this.$javaClass.NONE;
	}
	public static get TALL(): Wall$Height {
		return this.$javaClass.TALL;
	}
	public static valueOf(arg0: string): Wall$Height;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Wall$Height.$javaClass.valueOf(...args);
	}

	public static values(): Array<Wall$Height>;
	public static values(...args: any[]): any {
		return Wall$Height.$javaClass.values(...args);
	}

}

