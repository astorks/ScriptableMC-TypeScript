declare var Java: any;

export default interface WeatherType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

