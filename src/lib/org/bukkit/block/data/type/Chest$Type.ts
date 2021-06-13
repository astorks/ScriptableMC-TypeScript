declare var Java: any;

export default interface Chest$Type {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
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
	public static valueOf(arg0: string): Chest$Type;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Chest$Type.$javaClass.valueOf(...args);
	}

	public static values(): Array<Chest$Type>;
	public static values(...args: any[]): any {
		return Chest$Type.$javaClass.values(...args);
	}

}

