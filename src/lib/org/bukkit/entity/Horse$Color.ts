declare var Java: any;

export default interface Horse$Color {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Horse$Color {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Horse$Color');
	}

	public static get BLACK(): Horse$Color {
		return this.$javaClass.BLACK;
	}
	public static get BROWN(): Horse$Color {
		return this.$javaClass.BROWN;
	}
	public static get CHESTNUT(): Horse$Color {
		return this.$javaClass.CHESTNUT;
	}
	public static get CREAMY(): Horse$Color {
		return this.$javaClass.CREAMY;
	}
	public static get DARK_BROWN(): Horse$Color {
		return this.$javaClass.DARK_BROWN;
	}
	public static get GRAY(): Horse$Color {
		return this.$javaClass.GRAY;
	}
	public static get WHITE(): Horse$Color {
		return this.$javaClass.WHITE;
	}
	public static valueOf(arg0: string): Horse$Color;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Horse$Color.$javaClass.valueOf(...args);
	}

	public static values(): Array<Horse$Color>;
	public static values(...args: any[]): any {
		return Horse$Color.$javaClass.values(...args);
	}

}

