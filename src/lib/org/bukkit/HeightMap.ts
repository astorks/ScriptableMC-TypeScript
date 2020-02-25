declare var Java: any;

export default interface HeightMap {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

