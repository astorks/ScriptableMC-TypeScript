declare var Java: any;

export default interface Rabbit$Type {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Rabbit$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Rabbit$Type');
	}

	public static get BLACK(): Rabbit$Type {
		return this.$javaClass.BLACK;
	}
	public static get BLACK_AND_WHITE(): Rabbit$Type {
		return this.$javaClass.BLACK_AND_WHITE;
	}
	public static get BROWN(): Rabbit$Type {
		return this.$javaClass.BROWN;
	}
	public static get GOLD(): Rabbit$Type {
		return this.$javaClass.GOLD;
	}
	public static get SALT_AND_PEPPER(): Rabbit$Type {
		return this.$javaClass.SALT_AND_PEPPER;
	}
	public static get THE_KILLER_BUNNY(): Rabbit$Type {
		return this.$javaClass.THE_KILLER_BUNNY;
	}
	public static get WHITE(): Rabbit$Type {
		return this.$javaClass.WHITE;
	}
}

