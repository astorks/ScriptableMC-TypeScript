declare var Java: any;

export default interface MushroomCow$Variant {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

