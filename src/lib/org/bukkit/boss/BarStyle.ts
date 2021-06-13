declare var Java: any;

export default interface BarStyle {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class BarStyle {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.boss.BarStyle');
	}

	public static get SEGMENTED_10(): BarStyle {
		return this.$javaClass.SEGMENTED_10;
	}
	public static get SEGMENTED_12(): BarStyle {
		return this.$javaClass.SEGMENTED_12;
	}
	public static get SEGMENTED_20(): BarStyle {
		return this.$javaClass.SEGMENTED_20;
	}
	public static get SEGMENTED_6(): BarStyle {
		return this.$javaClass.SEGMENTED_6;
	}
	public static get SOLID(): BarStyle {
		return this.$javaClass.SOLID;
	}
	public static valueOf(arg0: string): BarStyle;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return BarStyle.$javaClass.valueOf(...args);
	}

	public static values(): Array<BarStyle>;
	public static values(...args: any[]): any {
		return BarStyle.$javaClass.values(...args);
	}

}

