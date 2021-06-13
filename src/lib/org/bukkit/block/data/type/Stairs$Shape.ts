declare var Java: any;

export default interface Stairs$Shape {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Stairs$Shape {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Stairs$Shape');
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
	public static get STRAIGHT(): Stairs$Shape {
		return this.$javaClass.STRAIGHT;
	}
	public static valueOf(arg0: string): Stairs$Shape;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Stairs$Shape.$javaClass.valueOf(...args);
	}

	public static values(): Array<Stairs$Shape>;
	public static values(...args: any[]): any {
		return Stairs$Shape.$javaClass.values(...args);
	}

}

