declare var Java: any;

export default interface MapView$Scale {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	getValue(): number;
	name(): string;
	ordinal(): number;
}

export default class MapView$Scale {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapView$Scale');
	}

	public static get CLOSE(): MapView$Scale {
		return this.$javaClass.CLOSE;
	}
	public static get CLOSEST(): MapView$Scale {
		return this.$javaClass.CLOSEST;
	}
	public static get FAR(): MapView$Scale {
		return this.$javaClass.FAR;
	}
	public static get FARTHEST(): MapView$Scale {
		return this.$javaClass.FARTHEST;
	}
	public static get NORMAL(): MapView$Scale {
		return this.$javaClass.NORMAL;
	}
	public static valueOf(arg0: string): MapView$Scale;
	public static valueOf(value: number): MapView$Scale;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return MapView$Scale.$javaClass.valueOf(...args);
	}

	public static values(): Array<MapView$Scale>;
	public static values(...args: any[]): any {
		return MapView$Scale.$javaClass.values(...args);
	}

}

