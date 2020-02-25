declare var Java: any;

export default interface Switch$Face {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

