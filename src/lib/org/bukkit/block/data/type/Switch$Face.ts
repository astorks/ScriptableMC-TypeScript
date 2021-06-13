declare var Java: any;

export default interface Switch$Face {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Switch$Face {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Switch$Face');
	}

	public static get CEILING(): Switch$Face {
		return this.$javaClass.CEILING;
	}
	public static get FLOOR(): Switch$Face {
		return this.$javaClass.FLOOR;
	}
	public static get WALL(): Switch$Face {
		return this.$javaClass.WALL;
	}
	public static valueOf(arg0: string): Switch$Face;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Switch$Face.$javaClass.valueOf(...args);
	}

	public static values(): Array<Switch$Face>;
	public static values(...args: any[]): any {
		return Switch$Face.$javaClass.values(...args);
	}

}

