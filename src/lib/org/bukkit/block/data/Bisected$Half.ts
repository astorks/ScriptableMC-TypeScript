declare var Java: any;

export default interface Bisected$Half {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

