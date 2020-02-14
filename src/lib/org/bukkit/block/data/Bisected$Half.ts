declare var Java: any;

export default interface Bisected$Half {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class Bisected$Half {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Bisected$Half');
	}

	public static get TOP(): Bisected$Half {
		return this.$javaClass.TOP;
	}
	public static get BOTTOM(): Bisected$Half {
		return this.$javaClass.BOTTOM;
	}
}

