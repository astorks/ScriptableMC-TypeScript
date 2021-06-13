declare var Java: any;

export default interface Door$Hinge {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Door$Hinge {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Door$Hinge');
	}

	public static get LEFT(): Door$Hinge {
		return this.$javaClass.LEFT;
	}
	public static get RIGHT(): Door$Hinge {
		return this.$javaClass.RIGHT;
	}
	public static valueOf(arg0: string): Door$Hinge;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Door$Hinge.$javaClass.valueOf(...args);
	}

	public static values(): Array<Door$Hinge>;
	public static values(...args: any[]): any {
		return Door$Hinge.$javaClass.values(...args);
	}

}

