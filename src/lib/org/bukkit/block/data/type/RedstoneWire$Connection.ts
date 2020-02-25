declare var Java: any;

export default interface RedstoneWire$Connection {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class RedstoneWire$Connection {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.RedstoneWire$Connection');
	}

	public static get NONE(): RedstoneWire$Connection {
		return this.$javaClass.NONE;
	}
	public static get SIDE(): RedstoneWire$Connection {
		return this.$javaClass.SIDE;
	}
	public static get UP(): RedstoneWire$Connection {
		return this.$javaClass.UP;
	}
}

