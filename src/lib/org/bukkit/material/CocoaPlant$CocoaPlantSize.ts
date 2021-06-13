declare var Java: any;

export default interface CocoaPlant$CocoaPlantSize {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class CocoaPlant$CocoaPlantSize {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.CocoaPlant$CocoaPlantSize');
	}

	public static get LARGE(): CocoaPlant$CocoaPlantSize {
		return this.$javaClass.LARGE;
	}
	public static get MEDIUM(): CocoaPlant$CocoaPlantSize {
		return this.$javaClass.MEDIUM;
	}
	public static get SMALL(): CocoaPlant$CocoaPlantSize {
		return this.$javaClass.SMALL;
	}
	public static valueOf(arg0: string): CocoaPlant$CocoaPlantSize;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return CocoaPlant$CocoaPlantSize.$javaClass.valueOf(...args);
	}

	public static values(): Array<CocoaPlant$CocoaPlantSize>;
	public static values(...args: any[]): any {
		return CocoaPlant$CocoaPlantSize.$javaClass.values(...args);
	}

}

