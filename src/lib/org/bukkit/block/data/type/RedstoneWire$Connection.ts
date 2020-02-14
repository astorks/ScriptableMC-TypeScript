declare var Java: any;

export default interface RedstoneWire$Connection {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class RedstoneWire$Connection {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.RedstoneWire$Connection');
	}

	public static get UP(): RedstoneWire$Connection {
		return this.$javaClass.UP;
	}
	public static get SIDE(): RedstoneWire$Connection {
		return this.$javaClass.SIDE;
	}
	public static get NONE(): RedstoneWire$Connection {
		return this.$javaClass.NONE;
	}
}

