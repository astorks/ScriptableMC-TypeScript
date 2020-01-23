declare var Java: any;
import {Server} from '../../../org/bukkit/Server.js'
import {PluginDescriptionFile} from '../../../org/bukkit/plugin/PluginDescriptionFile.js'
import {PluginLoader} from '../../../org/bukkit/plugin/PluginLoader.js'
import {FileConfiguration} from '../../../org/bukkit/configuration/file/FileConfiguration.js'
import {ChunkGenerator} from '../../../org/bukkit/generator/ChunkGenerator.js'
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {Command} from '../../../org/bukkit/command/Command.js'
import {TabExecutor} from '../../../org/bukkit/command/TabExecutor.js'

export interface Plugin extends TabExecutor {
	getName(): string;
	getResource(filename: string): any;
	getLogger(): any;
	onEnable(): void;
	getServer(): Server;
	onDisable(): void;
	onLoad(): void;
	isEnabled(): boolean;
	getDataFolder(): any;
	getDescription(): PluginDescriptionFile;
	getPluginLoader(): PluginLoader;
	getConfig(): FileConfiguration;
	setNaggable(canNag: boolean): void;
	isNaggable(): boolean;
	saveDefaultConfig(): void;
	reloadConfig(): void;
	saveConfig(): void;
	saveResource(resourcePath: string, replace: boolean): void;
	getDefaultWorldGenerator(worldName: string, id: string): ChunkGenerator;
	onTabComplete(sender: CommandSender, command: Command, alias: string, args: Array<string>): any;
	onCommand(sender: CommandSender, command: Command, label: string, args: Array<string>): boolean;
}

export class Plugin {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.Plugin');
	}
}

