declare var Java: any;

export default interface PluginChannelDirection {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
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
}

