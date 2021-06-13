declare var Java: any;

export default interface PluginChannelDirection {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class PluginChannelDirection {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.messaging.PluginChannelDirection');
	}

	public static get INCOMING(): PluginChannelDirection {
		return this.$javaClass.INCOMING;
	}
	public static get OUTGOING(): PluginChannelDirection {
		return this.$javaClass.OUTGOING;
	}
	public static valueOf(arg0: string): PluginChannelDirection;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return PluginChannelDirection.$javaClass.valueOf(...args);
	}

	public static values(): Array<PluginChannelDirection>;
	public static values(...args: any[]): any {
		return PluginChannelDirection.$javaClass.values(...args);
	}

}

