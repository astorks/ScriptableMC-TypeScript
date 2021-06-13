declare var Java: any;

export default interface Ocelot$Type {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	getId(): number;
	name(): string;
	ordinal(): number;
}

export default class Ocelot$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Ocelot$Type');
	}

	public static get BLACK_CAT(): Ocelot$Type {
		return this.$javaClass.BLACK_CAT;
	}
	public static get RED_CAT(): Ocelot$Type {
		return this.$javaClass.RED_CAT;
	}
	public static get SIAMESE_CAT(): Ocelot$Type {
		return this.$javaClass.SIAMESE_CAT;
	}
	public static get WILD_OCELOT(): Ocelot$Type {
		return this.$javaClass.WILD_OCELOT;
	}
	public static getType(id: number): Ocelot$Type;
	public static getType(...args: any[]): any {
		return Ocelot$Type.$javaClass.getType(...args);
	}

	public static valueOf(arg0: string): Ocelot$Type;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Ocelot$Type.$javaClass.valueOf(...args);
	}

	public static values(): Array<Ocelot$Type>;
	public static values(...args: any[]): any {
		return Ocelot$Type.$javaClass.values(...args);
	}

}

