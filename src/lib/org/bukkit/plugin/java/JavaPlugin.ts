declare var Java: any;
import ChunkGenerator from '../../../../org/bukkit/generator/ChunkGenerator.js'
import Command from '../../../../org/bukkit/command/Command.js'
import CommandSender from '../../../../org/bukkit/command/CommandSender.js'
import File from '../../../../java/io/File.js'
import FileConfiguration from '../../../../org/bukkit/configuration/file/FileConfiguration.js'
import InputStream from '../../../../java/io/InputStream.js'
import PluginBase from '../../../../org/bukkit/plugin/PluginBase.js'
import PluginCommand from '../../../../org/bukkit/command/PluginCommand.js'
import PluginDescriptionFile from '../../../../org/bukkit/plugin/PluginDescriptionFile.js'
import PluginLoader from '../../../../org/bukkit/plugin/PluginLoader.js'
import Server from '../../../../org/bukkit/Server.js'

export default interface JavaPlugin extends PluginBase {
	getLogger(): any;
	getServer(): Server;
	onLoad(): void;
	onEnable(): void;
	onDisable(): void;
	isEnabled(): boolean;
	onCommand(sender: CommandSender, command: Command, label: string, args: Array<string>): boolean;
	getDescription(): PluginDescriptionFile;
	onTabComplete(sender: CommandSender, command: Command, alias: string, args: Array<string>): Array<string>;
	getDataFolder(): File;
	getPluginLoader(): PluginLoader;
	getConfig(): FileConfiguration;
	reloadConfig(): void;
	saveConfig(): void;
	saveDefaultConfig(): void;
	saveResource(resourcePath: string, replace: boolean): void;
	getCommand(_name: string): PluginCommand;
	getDefaultWorldGenerator(worldName: string, id: string): ChunkGenerator;
	isNaggable(): boolean;
	setNaggable(canNag: boolean): void;
	getResource(filename: string): InputStream;
	getName(): string;
}

export default class JavaPlugin {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.java.JavaPlugin');
	}
	constructor();
	constructor(...args: any[]) {
		return new JavaPlugin.$javaClass(...args);
	}
	public static getPlugin(clazz: any): JavaPlugin;
	public static getPlugin(...args: any[]): any {
		return JavaPlugin.$javaClass.getPlugin(...args);
	}
	public static getProvidingPlugin(clazz: any): JavaPlugin;
	public static getProvidingPlugin(...args: any[]): any {
		return JavaPlugin.$javaClass.getProvidingPlugin(...args);
	}
}

