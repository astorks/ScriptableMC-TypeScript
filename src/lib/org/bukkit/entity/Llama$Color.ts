declare var Java: any;

export default interface Llama$Color {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class Llama$Color {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Llama$Color');
	}

	public static get CREAMY(): Llama$Color {
		return this.$javaClass.CREAMY;
	}
	public static get WHITE(): Llama$Color {
		return this.$javaClass.WHITE;
	}
	public static get BROWN(): Llama$Color {
		return this.$javaClass.BROWN;
	}
	public static get GRAY(): Llama$Color {
		return this.$javaClass.GRAY;
	}
}

