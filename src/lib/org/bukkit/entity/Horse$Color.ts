declare var Java: any;

export default interface Horse$Color {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class Horse$Color {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Horse$Color');
	}

	public static get WHITE(): Horse$Color {
		return this.$javaClass.WHITE;
	}
	public static get CREAMY(): Horse$Color {
		return this.$javaClass.CREAMY;
	}
	public static get CHESTNUT(): Horse$Color {
		return this.$javaClass.CHESTNUT;
	}
	public static get BROWN(): Horse$Color {
		return this.$javaClass.BROWN;
	}
	public static get BLACK(): Horse$Color {
		return this.$javaClass.BLACK;
	}
	public static get GRAY(): Horse$Color {
		return this.$javaClass.GRAY;
	}
	public static get DARK_BROWN(): Horse$Color {
		return this.$javaClass.DARK_BROWN;
	}
}

