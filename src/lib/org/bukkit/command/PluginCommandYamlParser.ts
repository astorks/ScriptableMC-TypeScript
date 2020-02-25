declare var Java: any;
import Command from '../../../org/bukkit/command/Command.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default class PluginCommandYamlParser {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.PluginCommandYamlParser');
	}

	constructor();
	constructor(...args: any[]) {
		return new PluginCommandYamlParser.$javaClass(...args);
	}

	public static parse(plugin: Plugin): Array<Command>;
	public static parse(...args: any[]): any {
		return PluginCommandYamlParser.$javaClass.parse(...args);
	}

}

