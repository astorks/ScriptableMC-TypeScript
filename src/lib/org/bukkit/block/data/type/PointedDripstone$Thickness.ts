declare var Java: any;

export default interface PointedDripstone$Thickness {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class PointedDripstone$Thickness {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.PointedDripstone$Thickness');
	}

	public static get BASE(): PointedDripstone$Thickness {
		return this.$javaClass.BASE;
	}
	public static get FRUSTUM(): PointedDripstone$Thickness {
		return this.$javaClass.FRUSTUM;
	}
	public static get MIDDLE(): PointedDripstone$Thickness {
		return this.$javaClass.MIDDLE;
	}
	public static get TIP(): PointedDripstone$Thickness {
		return this.$javaClass.TIP;
	}
	public static get TIP_MERGE(): PointedDripstone$Thickness {
		return this.$javaClass.TIP_MERGE;
	}
	public static valueOf(arg0: string): PointedDripstone$Thickness;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return PointedDripstone$Thickness.$javaClass.valueOf(...args);
	}

	public static values(): Array<PointedDripstone$Thickness>;
	public static values(...args: any[]): any {
		return PointedDripstone$Thickness.$javaClass.values(...args);
	}

}

