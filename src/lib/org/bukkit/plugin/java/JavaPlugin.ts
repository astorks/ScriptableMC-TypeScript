declare var Java: any;
import {Server} from '../../../../org/bukkit/Server.js'
import {PluginDescriptionFile} from '../../../../org/bukkit/plugin/PluginDescriptionFile.js'
import {PluginLoader} from '../../../../org/bukkit/plugin/PluginLoader.js'
import {FileConfiguration} from '../../../../org/bukkit/configuration/file/FileConfiguration.js'
import {CommandSender} from '../../../../org/bukkit/command/CommandSender.js'
import {Command} from '../../../../org/bukkit/command/Command.js'
import {PluginCommand} from '../../../../org/bukkit/command/PluginCommand.js'
import {ChunkGenerator} from '../../../../org/bukkit/generator/ChunkGenerator.js'
import {PluginBase} from '../../../../org/bukkit/plugin/PluginBase.js'

export interface JavaPlugin extends PluginBase {
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
	onTabComplete(sender: CommandSender, command: Command, alias: string, args: Array<string>): any;
	reloadConfig(): void;
	getCommand(_name: string): PluginCommand;
	saveConfig(): void;
	saveResource(resourcePath: string, replace: boolean): void;
	onCommand(sender: CommandSender, command: Command, label: string, args: Array<string>): boolean;
	getDefaultWorldGenerator(worldName: string, id: string): ChunkGenerator;
	getName(): string;
}

export class JavaPlugin {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.java.JavaPlugin');
	}
	constructor();
	constructor(...args: any[]) {
		return new JavaPlugin.$javaClass(...args);
	}
}

