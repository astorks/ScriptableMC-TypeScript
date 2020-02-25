declare var Java: any;

export default interface TreeSpecies {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getData(): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class TreeSpecies {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.TreeSpecies');
	}

	public static get ACACIA(): TreeSpecies {
		return this.$javaClass.ACACIA;
	}
	public static get BIRCH(): TreeSpecies {
		return this.$javaClass.BIRCH;
	}
	public static get DARK_OAK(): TreeSpecies {
		return this.$javaClass.DARK_OAK;
	}
	public static get GENERIC(): TreeSpecies {
		return this.$javaClass.GENERIC;
	}
	public static get JUNGLE(): TreeSpecies {
		return this.$javaClass.JUNGLE;
	}
	public static get REDWOOD(): TreeSpecies {
		return this.$javaClass.REDWOOD;
	}
}

