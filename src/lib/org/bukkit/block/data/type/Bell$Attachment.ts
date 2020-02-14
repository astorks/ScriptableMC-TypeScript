declare var Java: any;

export default interface Bell$Attachment {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class Bell$Attachment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Bell$Attachment');
	}

	public static get FLOOR(): Bell$Attachment {
		return this.$javaClass.FLOOR;
	}
	public static get CEILING(): Bell$Attachment {
		return this.$javaClass.CEILING;
	}
	public static get SINGLE_WALL(): Bell$Attachment {
		return this.$javaClass.SINGLE_WALL;
	}
	public static get DOUBLE_WALL(): Bell$Attachment {
		return this.$javaClass.DOUBLE_WALL;
	}
}

