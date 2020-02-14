declare var Java: any;

export default interface Stairs$Shape {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class Stairs$Shape {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Stairs$Shape');
	}

	public static get STRAIGHT(): Stairs$Shape {
		return this.$javaClass.STRAIGHT;
	}
	public static get INNER_LEFT(): Stairs$Shape {
		return this.$javaClass.INNER_LEFT;
	}
	public static get INNER_RIGHT(): Stairs$Shape {
		return this.$javaClass.INNER_RIGHT;
	}
	public static get OUTER_LEFT(): Stairs$Shape {
		return this.$javaClass.OUTER_LEFT;
	}
	public static get OUTER_RIGHT(): Stairs$Shape {
		return this.$javaClass.OUTER_RIGHT;
	}
}

