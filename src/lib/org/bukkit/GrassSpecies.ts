declare var Java: any;

export default interface GrassSpecies {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
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
	public static getByData(data: number): GrassSpecies;
	public static getByData(...args: any[]): any {
		return GrassSpecies.$javaClass.getByData(...args);
	}

	public static valueOf(arg0: string): GrassSpecies;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return GrassSpecies.$javaClass.valueOf(...args);
	}

	public static values(): Array<GrassSpecies>;
	public static values(...args: any[]): any {
		return GrassSpecies.$javaClass.values(...args);
	}

}

