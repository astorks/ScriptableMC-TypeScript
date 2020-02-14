declare var Java: any;

export default interface TreeType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class TreeType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.TreeType');
	}

	public static get ACACIA(): TreeType {
		return this.$javaClass.ACACIA;
	}
	public static get BIG_TREE(): TreeType {
		return this.$javaClass.BIG_TREE;
	}
	public static get BIRCH(): TreeType {
		return this.$javaClass.BIRCH;
	}
	public static get BROWN_MUSHROOM(): TreeType {
		return this.$javaClass.BROWN_MUSHROOM;
	}
	public static get CHORUS_PLANT(): TreeType {
		return this.$javaClass.CHORUS_PLANT;
	}
	public static get COCOA_TREE(): TreeType {
		return this.$javaClass.COCOA_TREE;
	}
	public static get DARK_OAK(): TreeType {
		return this.$javaClass.DARK_OAK;
	}
	public static get JUNGLE(): TreeType {
		return this.$javaClass.JUNGLE;
	}
	public static get JUNGLE_BUSH(): TreeType {
		return this.$javaClass.JUNGLE_BUSH;
	}
	public static get MEGA_REDWOOD(): TreeType {
		return this.$javaClass.MEGA_REDWOOD;
	}
	public static get REDWOOD(): TreeType {
		return this.$javaClass.REDWOOD;
	}
	public static get RED_MUSHROOM(): TreeType {
		return this.$javaClass.RED_MUSHROOM;
	}
	public static get SMALL_JUNGLE(): TreeType {
		return this.$javaClass.SMALL_JUNGLE;
	}
	public static get SWAMP(): TreeType {
		return this.$javaClass.SWAMP;
	}
	public static get TALL_BIRCH(): TreeType {
		return this.$javaClass.TALL_BIRCH;
	}
	public static get TALL_REDWOOD(): TreeType {
		return this.$javaClass.TALL_REDWOOD;
	}
	public static get TREE(): TreeType {
		return this.$javaClass.TREE;
	}
}

