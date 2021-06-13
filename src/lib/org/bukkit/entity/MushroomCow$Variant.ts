declare var Java: any;

export default interface MushroomCow$Variant {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class MushroomCow$Variant {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.MushroomCow$Variant');
	}

	public static get BROWN(): MushroomCow$Variant {
		return this.$javaClass.BROWN;
	}
	public static get RED(): MushroomCow$Variant {
		return this.$javaClass.RED;
	}
	public static valueOf(arg0: string): MushroomCow$Variant;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return MushroomCow$Variant.$javaClass.valueOf(...args);
	}

	public static values(): Array<MushroomCow$Variant>;
	public static values(...args: any[]): any {
		return MushroomCow$Variant.$javaClass.values(...args);
	}

}

