declare var Java: any;

export default interface TreeSpecies {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
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
	public static getByData(data: number): TreeSpecies;
	public static getByData(...args: any[]): any {
		return TreeSpecies.$javaClass.getByData(...args);
	}

	public static valueOf(arg0: string): TreeSpecies;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return TreeSpecies.$javaClass.valueOf(...args);
	}

	public static values(): Array<TreeSpecies>;
	public static values(...args: any[]): any {
		return TreeSpecies.$javaClass.values(...args);
	}

}

