declare var Java: any;

export default class PluginAwareness {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginAwareness');
	}

}

