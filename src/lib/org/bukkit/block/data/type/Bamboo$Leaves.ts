declare var Java: any;

export default interface Bamboo$Leaves {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Bamboo$Leaves {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Bamboo$Leaves');
	}

	public static get LARGE(): Bamboo$Leaves {
		return this.$javaClass.LARGE;
	}
	public static get NONE(): Bamboo$Leaves {
		return this.$javaClass.NONE;
	}
	public static get SMALL(): Bamboo$Leaves {
		return this.$javaClass.SMALL;
	}
	public static valueOf(arg0: string): Bamboo$Leaves;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Bamboo$Leaves.$javaClass.valueOf(...args);
	}

	public static values(): Array<Bamboo$Leaves>;
	public static values(...args: any[]): any {
		return Bamboo$Leaves.$javaClass.values(...args);
	}

}

