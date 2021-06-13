declare var Java: any;

export default interface Llama$Color {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Llama$Color {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Llama$Color');
	}

	public static get BROWN(): Llama$Color {
		return this.$javaClass.BROWN;
	}
	public static get CREAMY(): Llama$Color {
		return this.$javaClass.CREAMY;
	}
	public static get GRAY(): Llama$Color {
		return this.$javaClass.GRAY;
	}
	public static get WHITE(): Llama$Color {
		return this.$javaClass.WHITE;
	}
	public static valueOf(arg0: string): Llama$Color;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Llama$Color.$javaClass.valueOf(...args);
	}

	public static values(): Array<Llama$Color>;
	public static values(...args: any[]): any {
		return Llama$Color.$javaClass.values(...args);
	}

}

