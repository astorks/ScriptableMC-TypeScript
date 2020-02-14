declare var Java: any;

export default interface Bed$Part {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

