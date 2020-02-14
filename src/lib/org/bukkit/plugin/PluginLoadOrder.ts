declare var Java: any;

export default interface PluginLoadOrder {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

