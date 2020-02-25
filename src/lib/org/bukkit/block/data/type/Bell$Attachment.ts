declare var Java: any;

export default interface Bell$Attachment {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

