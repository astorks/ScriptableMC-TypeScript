declare var Java: any;

export default interface PluginLoadOrder {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class PluginLoadOrder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginLoadOrder');
	}

	public static get POSTWORLD(): PluginLoadOrder {
		return this.$javaClass.POSTWORLD;
	}
	public static get STARTUP(): PluginLoadOrder {
		return this.$javaClass.STARTUP;
	}
	public static valueOf(arg0: string): PluginLoadOrder;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return PluginLoadOrder.$javaClass.valueOf(...args);
	}

	public static values(): Array<PluginLoadOrder>;
	public static values(...args: any[]): any {
		return PluginLoadOrder.$javaClass.values(...args);
	}

}

