declare var Java: any;

export default interface Rail$Shape {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Rail$Shape {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Rail$Shape');
	}

	public static get ASCENDING_EAST(): Rail$Shape {
		return this.$javaClass.ASCENDING_EAST;
	}
	public static get ASCENDING_NORTH(): Rail$Shape {
		return this.$javaClass.ASCENDING_NORTH;
	}
	public static get ASCENDING_SOUTH(): Rail$Shape {
		return this.$javaClass.ASCENDING_SOUTH;
	}
	public static get ASCENDING_WEST(): Rail$Shape {
		return this.$javaClass.ASCENDING_WEST;
	}
	public static get EAST_WEST(): Rail$Shape {
		return this.$javaClass.EAST_WEST;
	}
	public static get NORTH_EAST(): Rail$Shape {
		return this.$javaClass.NORTH_EAST;
	}
	public static get NORTH_SOUTH(): Rail$Shape {
		return this.$javaClass.NORTH_SOUTH;
	}
	public static get NORTH_WEST(): Rail$Shape {
		return this.$javaClass.NORTH_WEST;
	}
	public static get SOUTH_EAST(): Rail$Shape {
		return this.$javaClass.SOUTH_EAST;
	}
	public static get SOUTH_WEST(): Rail$Shape {
		return this.$javaClass.SOUTH_WEST;
	}
	public static valueOf(arg0: string): Rail$Shape;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Rail$Shape.$javaClass.valueOf(...args);
	}

	public static values(): Array<Rail$Shape>;
	public static values(...args: any[]): any {
		return Rail$Shape.$javaClass.values(...args);
	}

}

