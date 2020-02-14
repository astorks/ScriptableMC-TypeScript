declare var Java: any;

export default interface Bed$Part {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class Bed$Part {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Bed$Part');
	}

	public static get HEAD(): Bed$Part {
		return this.$javaClass.HEAD;
	}
	public static get FOOT(): Bed$Part {
		return this.$javaClass.FOOT;
	}
}

