declare var Java: any;

export default interface Bell$Attachment {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Bell$Attachment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Bell$Attachment');
	}

	public static get CEILING(): Bell$Attachment {
		return this.$javaClass.CEILING;
	}
	public static get DOUBLE_WALL(): Bell$Attachment {
		return this.$javaClass.DOUBLE_WALL;
	}
	public static get FLOOR(): Bell$Attachment {
		return this.$javaClass.FLOOR;
	}
	public static get SINGLE_WALL(): Bell$Attachment {
		return this.$javaClass.SINGLE_WALL;
	}
	public static valueOf(arg0: string): Bell$Attachment;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Bell$Attachment.$javaClass.valueOf(...args);
	}

	public static values(): Array<Bell$Attachment>;
	public static values(...args: any[]): any {
		return Bell$Attachment.$javaClass.values(...args);
	}

}

