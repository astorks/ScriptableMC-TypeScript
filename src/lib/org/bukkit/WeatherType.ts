declare var Java: any;

export default interface WeatherType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class WeatherType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.WeatherType');
	}

	public static get CLEAR(): WeatherType {
		return this.$javaClass.CLEAR;
	}
	public static get DOWNFALL(): WeatherType {
		return this.$javaClass.DOWNFALL;
	}
	public static valueOf(arg0: string): WeatherType;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return WeatherType.$javaClass.valueOf(...args);
	}

	public static values(): Array<WeatherType>;
	public static values(...args: any[]): any {
		return WeatherType.$javaClass.values(...args);
	}

}

