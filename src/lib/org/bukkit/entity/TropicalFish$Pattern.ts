declare var Java: any;

export default interface TropicalFish$Pattern {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class TropicalFish$Pattern {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.TropicalFish$Pattern');
	}

	public static get BETTY(): TropicalFish$Pattern {
		return this.$javaClass.BETTY;
	}
	public static get BLOCKFISH(): TropicalFish$Pattern {
		return this.$javaClass.BLOCKFISH;
	}
	public static get BRINELY(): TropicalFish$Pattern {
		return this.$javaClass.BRINELY;
	}
	public static get CLAYFISH(): TropicalFish$Pattern {
		return this.$javaClass.CLAYFISH;
	}
	public static get DASHER(): TropicalFish$Pattern {
		return this.$javaClass.DASHER;
	}
	public static get FLOPPER(): TropicalFish$Pattern {
		return this.$javaClass.FLOPPER;
	}
	public static get GLITTER(): TropicalFish$Pattern {
		return this.$javaClass.GLITTER;
	}
	public static get KOB(): TropicalFish$Pattern {
		return this.$javaClass.KOB;
	}
	public static get SNOOPER(): TropicalFish$Pattern {
		return this.$javaClass.SNOOPER;
	}
	public static get SPOTTY(): TropicalFish$Pattern {
		return this.$javaClass.SPOTTY;
	}
	public static get STRIPEY(): TropicalFish$Pattern {
		return this.$javaClass.STRIPEY;
	}
	public static get SUNSTREAK(): TropicalFish$Pattern {
		return this.$javaClass.SUNSTREAK;
	}
}

