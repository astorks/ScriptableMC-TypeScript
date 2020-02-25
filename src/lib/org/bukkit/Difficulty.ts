declare var Java: any;

export default interface Difficulty {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	getValue(): number;
	name(): string;
	ordinal(): number;
}

export default class Difficulty {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Difficulty');
	}

	public static get EASY(): Difficulty {
		return this.$javaClass.EASY;
	}
	public static get HARD(): Difficulty {
		return this.$javaClass.HARD;
	}
	public static get NORMAL(): Difficulty {
		return this.$javaClass.NORMAL;
	}
	public static get PEACEFUL(): Difficulty {
		return this.$javaClass.PEACEFUL;
	}
}

