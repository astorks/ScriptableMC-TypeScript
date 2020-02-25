declare var Java: any;

export default interface GrassSpecies {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getData(): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class GrassSpecies {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.GrassSpecies');
	}

	public static get DEAD(): GrassSpecies {
		return this.$javaClass.DEAD;
	}
	public static get FERN_LIKE(): GrassSpecies {
		return this.$javaClass.FERN_LIKE;
	}
	public static get NORMAL(): GrassSpecies {
		return this.$javaClass.NORMAL;
	}
}

