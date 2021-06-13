declare var Java: any;

export default interface Comparator$Mode {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Comparator$Mode {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Comparator$Mode');
	}

	public static get COMPARE(): Comparator$Mode {
		return this.$javaClass.COMPARE;
	}
	public static get SUBTRACT(): Comparator$Mode {
		return this.$javaClass.SUBTRACT;
	}
	public static valueOf(arg0: string): Comparator$Mode;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Comparator$Mode.$javaClass.valueOf(...args);
	}

	public static values(): Array<Comparator$Mode>;
	public static values(...args: any[]): any {
		return Comparator$Mode.$javaClass.values(...args);
	}

}

