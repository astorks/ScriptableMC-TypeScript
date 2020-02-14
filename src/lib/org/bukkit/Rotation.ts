declare var Java: any;

export default interface Rotation {
	rotateClockwise(): Rotation;
	rotateCounterClockwise(): Rotation;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class Rotation {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Rotation');
	}

	public static get NONE(): Rotation {
		return this.$javaClass.NONE;
	}
	public static get CLOCKWISE_45(): Rotation {
		return this.$javaClass.CLOCKWISE_45;
	}
	public static get CLOCKWISE(): Rotation {
		return this.$javaClass.CLOCKWISE;
	}
	public static get CLOCKWISE_135(): Rotation {
		return this.$javaClass.CLOCKWISE_135;
	}
	public static get FLIPPED(): Rotation {
		return this.$javaClass.FLIPPED;
	}
	public static get FLIPPED_45(): Rotation {
		return this.$javaClass.FLIPPED_45;
	}
	public static get COUNTER_CLOCKWISE(): Rotation {
		return this.$javaClass.COUNTER_CLOCKWISE;
	}
	public static get COUNTER_CLOCKWISE_45(): Rotation {
		return this.$javaClass.COUNTER_CLOCKWISE_45;
	}
}

