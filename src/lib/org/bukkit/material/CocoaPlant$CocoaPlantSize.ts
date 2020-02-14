declare var Java: any;

export default interface CocoaPlant$CocoaPlantSize {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class CocoaPlant$CocoaPlantSize {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.CocoaPlant$CocoaPlantSize');
	}

	public static get SMALL(): CocoaPlant$CocoaPlantSize {
		return this.$javaClass.SMALL;
	}
	public static get MEDIUM(): CocoaPlant$CocoaPlantSize {
		return this.$javaClass.MEDIUM;
	}
	public static get LARGE(): CocoaPlant$CocoaPlantSize {
		return this.$javaClass.LARGE;
	}
}

