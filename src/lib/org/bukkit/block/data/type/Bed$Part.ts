declare var Java: any;

export default interface Bed$Part {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Bed$Part {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Bed$Part');
	}

	public static get FOOT(): Bed$Part {
		return this.$javaClass.FOOT;
	}
	public static get HEAD(): Bed$Part {
		return this.$javaClass.HEAD;
	}
	public static valueOf(arg0: string): Bed$Part;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Bed$Part.$javaClass.valueOf(...args);
	}

	public static values(): Array<Bed$Part>;
	public static values(...args: any[]): any {
		return Bed$Part.$javaClass.values(...args);
	}

}

