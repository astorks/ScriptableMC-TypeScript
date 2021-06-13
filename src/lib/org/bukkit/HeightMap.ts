declare var Java: any;

export default interface HeightMap {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class HeightMap {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.HeightMap');
	}

	public static get MOTION_BLOCKING(): HeightMap {
		return this.$javaClass.MOTION_BLOCKING;
	}
	public static get MOTION_BLOCKING_NO_LEAVES(): HeightMap {
		return this.$javaClass.MOTION_BLOCKING_NO_LEAVES;
	}
	public static get OCEAN_FLOOR(): HeightMap {
		return this.$javaClass.OCEAN_FLOOR;
	}
	public static get OCEAN_FLOOR_WG(): HeightMap {
		return this.$javaClass.OCEAN_FLOOR_WG;
	}
	public static get WORLD_SURFACE(): HeightMap {
		return this.$javaClass.WORLD_SURFACE;
	}
	public static get WORLD_SURFACE_WG(): HeightMap {
		return this.$javaClass.WORLD_SURFACE_WG;
	}
	public static valueOf(arg0: string): HeightMap;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return HeightMap.$javaClass.valueOf(...args);
	}

	public static values(): Array<HeightMap>;
	public static values(...args: any[]): any {
		return HeightMap.$javaClass.values(...args);
	}

}

