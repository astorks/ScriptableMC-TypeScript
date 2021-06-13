declare var Java: any;

export default interface WorldType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	getName(): string;
	name(): string;
	ordinal(): number;
}

export default class WorldType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.WorldType');
	}

	public static get AMPLIFIED(): WorldType {
		return this.$javaClass.AMPLIFIED;
	}
	public static get FLAT(): WorldType {
		return this.$javaClass.FLAT;
	}
	public static get LARGE_BIOMES(): WorldType {
		return this.$javaClass.LARGE_BIOMES;
	}
	public static get NORMAL(): WorldType {
		return this.$javaClass.NORMAL;
	}
	public static getByName(_name: string): WorldType;
	public static getByName(...args: any[]): any {
		return WorldType.$javaClass.getByName(...args);
	}

	public static valueOf(arg0: string): WorldType;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return WorldType.$javaClass.valueOf(...args);
	}

	public static values(): Array<WorldType>;
	public static values(...args: any[]): any {
		return WorldType.$javaClass.values(...args);
	}

}

