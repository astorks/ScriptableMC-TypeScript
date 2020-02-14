declare var Java: any;

export default interface TreeSpecies {
	getData(): number;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class TreeSpecies {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.TreeSpecies');
	}

	public static get GENERIC(): TreeSpecies {
		return this.$javaClass.GENERIC;
	}
	public static get REDWOOD(): TreeSpecies {
		return this.$javaClass.REDWOOD;
	}
	public static get BIRCH(): TreeSpecies {
		return this.$javaClass.BIRCH;
	}
	public static get JUNGLE(): TreeSpecies {
		return this.$javaClass.JUNGLE;
	}
	public static get ACACIA(): TreeSpecies {
		return this.$javaClass.ACACIA;
	}
	public static get DARK_OAK(): TreeSpecies {
		return this.$javaClass.DARK_OAK;
	}
}

