declare var Java: any;

export default interface Axolotl$Variant {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Axolotl$Variant {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Axolotl$Variant');
	}

	public static get BLUE(): Axolotl$Variant {
		return this.$javaClass.BLUE;
	}
	public static get CYAN(): Axolotl$Variant {
		return this.$javaClass.CYAN;
	}
	public static get GOLD(): Axolotl$Variant {
		return this.$javaClass.GOLD;
	}
	public static get LUCY(): Axolotl$Variant {
		return this.$javaClass.LUCY;
	}
	public static get WILD(): Axolotl$Variant {
		return this.$javaClass.WILD;
	}
	public static valueOf(arg0: string): Axolotl$Variant;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Axolotl$Variant.$javaClass.valueOf(...args);
	}

	public static values(): Array<Axolotl$Variant>;
	public static values(...args: any[]): any {
		return Axolotl$Variant.$javaClass.values(...args);
	}

}

