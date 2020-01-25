declare var Java: any;
import {Server} from '../../../org/bukkit/Server.js'
import {PluginLoader} from '../../../org/bukkit/plugin/PluginLoader.js'
import {PluginDescriptionFile} from '../../../org/bukkit/plugin/PluginDescriptionFile.js'
import {FileConfiguration} from '../../../org/bukkit/configuration/file/FileConfiguration.js'
import {ChunkGenerator} from '../../../org/bukkit/generator/ChunkGenerator.js'
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {Command} from '../../../org/bukkit/command/Command.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'

export interface PluginBase extends Plugin {
	getName(): string;
	getLogger(): any;
	getServer(): Server;
	onLoad(): void;
	onEnable(): void;
	onDisable(): void;
	getDataFolder(): any;
	getPluginLoader(): PluginLoader;
	getDescription(): PluginDescriptionFile;
	getConfig(): FileConfiguration;
	reloadConfig(): void;
	saveConfig(): void;
	saveDefaultConfig(): void;
	saveResource(arg0: string, arg1: boolean): void;
	getDefaultWorldGenerator(arg0: string, arg1: string): ChunkGenerator;
	isNaggable(): boolean;
	setNaggable(arg0: boolean): void;
	isEnabled(): boolean;
	getResource(arg0: string): any;
	onTabComplete(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): any;
	onCommand(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): boolean;
}

export class PluginBase {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginBase');
	}
	constructor();
	constructor(...args: any[]) {
		return new PluginBase.$javaClass(...args);
	}
}

