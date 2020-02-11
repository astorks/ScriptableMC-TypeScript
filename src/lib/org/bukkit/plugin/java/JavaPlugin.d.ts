import ChunkGenerator from '../../../../org/bukkit/generator/ChunkGenerator.js';
import Command from '../../../../org/bukkit/command/Command.js';
import CommandSender from '../../../../org/bukkit/command/CommandSender.js';
import File from '../../../../java/io/File.js';
import FileConfiguration from '../../../../org/bukkit/configuration/file/FileConfiguration.js';
import InputStream from '../../../../java/io/InputStream.js';
import PluginBase from '../../../../org/bukkit/plugin/PluginBase.js';
import PluginCommand from '../../../../org/bukkit/command/PluginCommand.js';
import PluginDescriptionFile from '../../../../org/bukkit/plugin/PluginDescriptionFile.js';
import PluginLoader from '../../../../org/bukkit/plugin/PluginLoader.js';
import Server from '../../../../org/bukkit/Server.js';
export default interface JavaPlugin extends PluginBase {
    getResource(filename: string): InputStream;
    getLogger(): any;
    onLoad(): void;
    onDisable(): void;
    onEnable(): void;
    getServer(): Server;
    getDefaultWorldGenerator(worldName: string, id: string): ChunkGenerator;
    saveConfig(): void;
    isNaggable(): boolean;
    saveResource(resourcePath: string, replace: boolean): void;
    getPluginLoader(): PluginLoader;
    getCommand(_name: string): PluginCommand;
    reloadConfig(): void;
    getDataFolder(): File;
    setNaggable(canNag: boolean): void;
    getConfig(): FileConfiguration;
    saveDefaultConfig(): void;
    onTabComplete(sender: CommandSender, command: Command, alias: string, args: Array<string>): Array<string>;
    getDescription(): PluginDescriptionFile;
    isEnabled(): boolean;
    onCommand(sender: CommandSender, command: Command, label: string, args: Array<string>): boolean;
    getName(): string;
}
export default class JavaPlugin {
    static get $javaClass(): any;
    constructor();
    static getPlugin(clazz: any): JavaPlugin;
    static getProvidingPlugin(clazz: any): JavaPlugin;
}
