declare var Java: any;

export default interface MushroomCow$Variant {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class MushroomCow$Variant {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.MushroomCow$Variant');
	}

	public static get RED(): MushroomCow$Variant {
		return this.$javaClass.RED;
	}
	public static get BROWN(): MushroomCow$Variant {
		return this.$javaClass.BROWN;
	}
}

