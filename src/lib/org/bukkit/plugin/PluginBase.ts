declare var Java: any;
import ChunkGenerator from '../../../org/bukkit/generator/ChunkGenerator.js'
import Command from '../../../org/bukkit/command/Command.js'
import CommandSender from '../../../org/bukkit/command/CommandSender.js'
import File from '../../../java/io/File.js'
import FileConfiguration from '../../../org/bukkit/configuration/file/FileConfiguration.js'
import InputStream from '../../../java/io/InputStream.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import PluginDescriptionFile from '../../../org/bukkit/plugin/PluginDescriptionFile.js'
import PluginLoader from '../../../org/bukkit/plugin/PluginLoader.js'
import Server from '../../../org/bukkit/Server.js'

export default interface PluginBase extends Plugin {
	getConfig(): FileConfiguration;
	getDataFolder(): File;
	getDefaultWorldGenerator(arg0: string, arg1: string): ChunkGenerator;
	getDescription(): PluginDescriptionFile;
	getLogger(): any;
	getName(): string;
	getPluginLoader(): PluginLoader;
	getResource(arg0: string): InputStream;
	getServer(): Server;
	isEnabled(): boolean;
	isNaggable(): boolean;
	onCommand(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): boolean;
	onDisable(): void;
	onEnable(): void;
	onLoad(): void;
	onTabComplete(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): Array<string>;
	reloadConfig(): void;
	saveConfig(): void;
	saveDefaultConfig(): void;
	saveResource(arg0: string, arg1: boolean): void;
	setNaggable(arg0: boolean): void;
}

export default class PluginBase {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginBase');
	}

	constructor();
	constructor(...args: any[]) {
		return new PluginBase.$javaClass(...args);
	}

}

