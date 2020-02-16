declare var Java: any;
import ChunkGenerator from '../../../org/bukkit/generator/ChunkGenerator.js'
import Command from '../../../org/bukkit/command/Command.js'
import CommandSender from '../../../org/bukkit/command/CommandSender.js'
import File from '../../../java/io/File.js'
import FileConfiguration from '../../../org/bukkit/configuration/file/FileConfiguration.js'
import InputStream from '../../../java/io/InputStream.js'
import JavaPlugin from '../../../org/bukkit/plugin/java/JavaPlugin.js'
import PluginCommand from '../../../org/bukkit/command/PluginCommand.js'
import PluginDescriptionFile from '../../../org/bukkit/plugin/PluginDescriptionFile.js'
import PluginLoader from '../../../org/bukkit/plugin/PluginLoader.js'
import ScriptablePluginEngine from '../../../com/pixlfox/scriptablemc/core/ScriptablePluginEngine.js'
import Server from '../../../org/bukkit/Server.js'
import Version from '../../../com/smc/version/Version.js'

export default interface ScriptEngineMain extends JavaPlugin {
	getChatMessagePrefix(): string;
	getCommand(_name: string): PluginCommand;
	getCommandManager(): any;
	getConfig(): FileConfiguration;
	getDataFolder(): File;
	getDefaultWorldGenerator(worldName: string, id: string): ChunkGenerator;
	getDescription(): PluginDescriptionFile;
	getLogger(): any;
	getName(): string;
	getPluginLoader(): PluginLoader;
	getPluginVersion(): Version;
	getResource(filename: string): InputStream;
	getScriptEngine(): ScriptablePluginEngine;
	getScriptLanguage(): string;
	getServer(): Server;
	isEnabled(): boolean;
	isNaggable(): boolean;
	onCommand(sender: CommandSender, command: Command, label: string, args: Array<string>): boolean;
	onDisable(): void;
	onEnable(): void;
	onLoad(): void;
	onTabComplete(sender: CommandSender, command: Command, alias: string, args: Array<string>): Array<string>;
	reloadConfig(): void;
	reloadScriptEngine(sender: CommandSender): void;
	saveConfig(): void;
	saveDefaultConfig(): void;
	saveResource(resourcePath: string, replace: boolean): void;
	setCommandManager(value: any): void;
	setNaggable(canNag: boolean): void;
	setScriptEngine(value: ScriptablePluginEngine): void;
	versionCheck(sender: CommandSender): void;
}

export default class ScriptEngineMain {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.ScriptEngineMain');
	}

	constructor();
	constructor(...args: any[]) {
		return new ScriptEngineMain.$javaClass(...args);
	}

	public static access$getScriptEngines$cp(): any;
	public static access$getScriptEngines$cp(...args: any[]): any {
		return ScriptEngineMain.$javaClass.access$getScriptEngines$cp(...args);
	}

	public static getAllScriptEngines(): Array<ScriptEngineMain>;
	public static getAllScriptEngines(...args: any[]): any {
		return ScriptEngineMain.$javaClass.getAllScriptEngines(...args);
	}

	public static getPlugin(clazz: any): JavaPlugin;
	public static getPlugin(...args: any[]): any {
		return ScriptEngineMain.$javaClass.getPlugin(...args);
	}

	public static getProvidingPlugin(clazz: any): JavaPlugin;
	public static getProvidingPlugin(...args: any[]): any {
		return ScriptEngineMain.$javaClass.getProvidingPlugin(...args);
	}

	public static registerScriptEngine(language: string, scriptEngineMain: ScriptEngineMain): void;
	public static registerScriptEngine(...args: any[]): any {
		return ScriptEngineMain.$javaClass.registerScriptEngine(...args);
	}

	public static releaseScriptEngine(language: string): void;
	public static releaseScriptEngine(...args: any[]): any {
		return ScriptEngineMain.$javaClass.releaseScriptEngine(...args);
	}

	public static reloadAllScriptEngines(): void;
	public static reloadAllScriptEngines(sender: CommandSender): void;
	public static reloadAllScriptEngines(...args: any[]): any {
		return ScriptEngineMain.$javaClass.reloadAllScriptEngines(...args);
	}

	public static reloadScriptEngine$default(arg0: ScriptEngineMain, arg1: CommandSender, arg2: number, arg3: any): void;
	public static reloadScriptEngine$default(...args: any[]): any {
		return ScriptEngineMain.$javaClass.reloadScriptEngine$default(...args);
	}

	public static resolveScriptEngine(language: string): ScriptEngineMain;
	public static resolveScriptEngine(...args: any[]): any {
		return ScriptEngineMain.$javaClass.resolveScriptEngine(...args);
	}

	public static versionCheck$default(arg0: ScriptEngineMain, arg1: CommandSender, arg2: number, arg3: any): void;
	public static versionCheck$default(...args: any[]): any {
		return ScriptEngineMain.$javaClass.versionCheck$default(...args);
	}

}

