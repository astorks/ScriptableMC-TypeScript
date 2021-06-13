declare var Java: any;

export default interface RedstoneWire$Connection {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
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
	public static valueOf(arg0: string): RedstoneWire$Connection;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return RedstoneWire$Connection.$javaClass.valueOf(...args);
	}

	public static values(): Array<RedstoneWire$Connection>;
	public static values(...args: any[]): any {
		return RedstoneWire$Connection.$javaClass.values(...args);
	}

}

