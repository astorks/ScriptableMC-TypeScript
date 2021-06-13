declare var Java: any;

export default interface BarColor {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class BarColor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.boss.BarColor');
	}

	public static get BLUE(): BarColor {
		return this.$javaClass.BLUE;
	}
	public static get GREEN(): BarColor {
		return this.$javaClass.GREEN;
	}
	public static get PINK(): BarColor {
		return this.$javaClass.PINK;
	}
	public static get PURPLE(): BarColor {
		return this.$javaClass.PURPLE;
	}
	public static get RED(): BarColor {
		return this.$javaClass.RED;
	}
	public static get WHITE(): BarColor {
		return this.$javaClass.WHITE;
	}
	public static get YELLOW(): BarColor {
		return this.$javaClass.YELLOW;
	}
	public static valueOf(arg0: string): BarColor;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return BarColor.$javaClass.valueOf(...args);
	}

	public static values(): Array<BarColor>;
	public static values(...args: any[]): any {
		return BarColor.$javaClass.values(...args);
	}

}

