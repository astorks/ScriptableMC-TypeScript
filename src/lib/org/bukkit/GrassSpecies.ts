declare var Java: any;

export default interface GrassSpecies {
	getData(): number;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class GrassSpecies {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.GrassSpecies');
	}

	public static get DEAD(): GrassSpecies {
		return this.$javaClass.DEAD;
	}
	public static get NORMAL(): GrassSpecies {
		return this.$javaClass.NORMAL;
	}
	public static get FERN_LIKE(): GrassSpecies {
		return this.$javaClass.FERN_LIKE;
	}
}

