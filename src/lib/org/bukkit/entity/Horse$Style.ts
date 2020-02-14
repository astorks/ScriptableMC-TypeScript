declare var Java: any;

export default interface Horse$Style {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class Horse$Style {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Horse$Style');
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
	public static get BLACK_DOTS(): Horse$Style {
		return this.$javaClass.BLACK_DOTS;
	}
}

