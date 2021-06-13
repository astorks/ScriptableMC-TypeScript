declare var Java: any;

export default interface Horse$Style {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Horse$Style {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Horse$Style');
	}

	public static get BLACK_DOTS(): Horse$Style {
		return this.$javaClass.BLACK_DOTS;
	}
	public static get NONE(): Horse$Style {
		return this.$javaClass.NONE;
	}
	public static get WHITE(): Horse$Style {
		return this.$javaClass.WHITE;
	}
	public static get WHITEFIELD(): Horse$Style {
		return this.$javaClass.WHITEFIELD;
	}
	public static get WHITE_DOTS(): Horse$Style {
		return this.$javaClass.WHITE_DOTS;
	}
	public static valueOf(arg0: string): Horse$Style;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Horse$Style.$javaClass.valueOf(...args);
	}

	public static values(): Array<Horse$Style>;
	public static values(...args: any[]): any {
		return Horse$Style.$javaClass.values(...args);
	}

}

