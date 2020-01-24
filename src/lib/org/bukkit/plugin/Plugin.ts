declare var Java: any;
import {ChunkGenerator} from '../../../org/bukkit/generator/ChunkGenerator.js'
import {Server} from '../../../org/bukkit/Server.js'
import {PluginDescriptionFile} from '../../../org/bukkit/plugin/PluginDescriptionFile.js'
import {PluginLoader} from '../../../org/bukkit/plugin/PluginLoader.js'
import {FileConfiguration} from '../../../org/bukkit/configuration/file/FileConfiguration.js'
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {Command} from '../../../org/bukkit/command/Command.js'
import {TabExecutor} from '../../../org/bukkit/command/TabExecutor.js'

export interface Plugin extends TabExecutor {
	getName(): string;
	getResource(filename: string): any;
	getLogger(): any;
	getDefaultWorldGenerator(worldName: string, id: string): ChunkGenerator;
	onEnable(): void;
	onDisable(): void;
	getServer(): Server;
	onLoad(): void;
	isEnabled(): boolean;
	getDescription(): PluginDescriptionFile;
	isNaggable(): boolean;
	getDataFolder(): any;
	setNaggable(canNag: boolean): void;
	getPluginLoader(): PluginLoader;
	saveDefaultConfig(): void;
	saveConfig(): void;
	reloadConfig(): void;
	getConfig(): FileConfiguration;
	saveResource(resourcePath: string, replace: boolean): void;
	onTabComplete(sender: CommandSender, command: Command, alias: string, args: Array<string>): any;
	onCommand(sender: CommandSender, command: Command, label: string, args: Array<string>): boolean;
}

export class Plugin {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.Plugin');
	}
}

