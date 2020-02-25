declare var Java: any;

export default interface Chest$Type {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Chest$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Chest$Type');
	}

	public static get LEFT(): Chest$Type {
		return this.$javaClass.LEFT;
	}
	public static get RIGHT(): Chest$Type {
		return this.$javaClass.RIGHT;
	}
	public static get SINGLE(): Chest$Type {
		return this.$javaClass.SINGLE;
	}
}

