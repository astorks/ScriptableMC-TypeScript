declare var Java: any;

export default interface Bisected$Half {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Bisected$Half {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Bisected$Half');
	}

	public static get BOTTOM(): Bisected$Half {
		return this.$javaClass.BOTTOM;
	}
	public static get TOP(): Bisected$Half {
		return this.$javaClass.TOP;
	}
	public static valueOf(arg0: string): Bisected$Half;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Bisected$Half.$javaClass.valueOf(...args);
	}

	public static values(): Array<Bisected$Half>;
	public static values(...args: any[]): any {
		return Bisected$Half.$javaClass.values(...args);
	}

}

