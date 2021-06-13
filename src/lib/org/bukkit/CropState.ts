declare var Java: any;

export default interface CropState {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getData(): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class CropState {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.CropState');
	}

	public static get GERMINATED(): CropState {
		return this.$javaClass.GERMINATED;
	}
	public static get MEDIUM(): CropState {
		return this.$javaClass.MEDIUM;
	}
	public static get RIPE(): CropState {
		return this.$javaClass.RIPE;
	}
	public static get SEEDED(): CropState {
		return this.$javaClass.SEEDED;
	}
	public static get SMALL(): CropState {
		return this.$javaClass.SMALL;
	}
	public static get TALL(): CropState {
		return this.$javaClass.TALL;
	}
	public static get VERY_SMALL(): CropState {
		return this.$javaClass.VERY_SMALL;
	}
	public static get VERY_TALL(): CropState {
		return this.$javaClass.VERY_TALL;
	}
	public static getByData(data: number): CropState;
	public static getByData(...args: any[]): any {
		return CropState.$javaClass.getByData(...args);
	}

	public static valueOf(arg0: string): CropState;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return CropState.$javaClass.valueOf(...args);
	}

	public static values(): Array<CropState>;
	public static values(...args: any[]): any {
		return CropState.$javaClass.values(...args);
	}

}

