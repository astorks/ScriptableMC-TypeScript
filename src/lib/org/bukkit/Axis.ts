declare var Java: any;

export default interface Axis {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Axis {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Axis');
	}

	public static get X(): Axis {
		return this.$javaClass.X;
	}
	public static get Y(): Axis {
		return this.$javaClass.Y;
	}
	public static get Z(): Axis {
		return this.$javaClass.Z;
	}
}

