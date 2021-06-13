declare var Java: any;

export default interface Jigsaw$Orientation {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Jigsaw$Orientation {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Jigsaw$Orientation');
	}

	public static get DOWN_EAST(): Jigsaw$Orientation {
		return this.$javaClass.DOWN_EAST;
	}
	public static get DOWN_NORTH(): Jigsaw$Orientation {
		return this.$javaClass.DOWN_NORTH;
	}
	public static get DOWN_SOUTH(): Jigsaw$Orientation {
		return this.$javaClass.DOWN_SOUTH;
	}
	public static get DOWN_WEST(): Jigsaw$Orientation {
		return this.$javaClass.DOWN_WEST;
	}
	public static get EAST_UP(): Jigsaw$Orientation {
		return this.$javaClass.EAST_UP;
	}
	public static get NORTH_UP(): Jigsaw$Orientation {
		return this.$javaClass.NORTH_UP;
	}
	public static get SOUTH_UP(): Jigsaw$Orientation {
		return this.$javaClass.SOUTH_UP;
	}
	public static get UP_EAST(): Jigsaw$Orientation {
		return this.$javaClass.UP_EAST;
	}
	public static get UP_NORTH(): Jigsaw$Orientation {
		return this.$javaClass.UP_NORTH;
	}
	public static get UP_SOUTH(): Jigsaw$Orientation {
		return this.$javaClass.UP_SOUTH;
	}
	public static get UP_WEST(): Jigsaw$Orientation {
		return this.$javaClass.UP_WEST;
	}
	public static get WEST_UP(): Jigsaw$Orientation {
		return this.$javaClass.WEST_UP;
	}
	public static valueOf(arg0: string): Jigsaw$Orientation;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Jigsaw$Orientation.$javaClass.valueOf(...args);
	}

	public static values(): Array<Jigsaw$Orientation>;
	public static values(...args: any[]): any {
		return Jigsaw$Orientation.$javaClass.values(...args);
	}

}

