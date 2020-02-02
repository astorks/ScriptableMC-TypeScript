import ChunkGenerator from '../../../../org/bukkit/generator/ChunkGenerator.js';
import Command from '../../../../org/bukkit/command/Command.js';
import CommandSender from '../../../../org/bukkit/command/CommandSender.js';
import FileConfiguration from '../../../../org/bukkit/configuration/file/FileConfiguration.js';
import PluginBase from '../../../../org/bukkit/plugin/PluginBase.js';
import PluginCommand from '../../../../org/bukkit/command/PluginCommand.js';
import PluginDescriptionFile from '../../../../org/bukkit/plugin/PluginDescriptionFile.js';
import PluginLoader from '../../../../org/bukkit/plugin/PluginLoader.js';
import Server from '../../../../org/bukkit/Server.js';
export default interface JavaPlugin extends PluginBase {
    getResource(filename: string): any;
    getLogger(): any;
    getServer(): Server;
    onLoad(): void;
    saveConfig(): void;
    saveDefaultConfig(): void;
    onCommand(sender: CommandSender, command: Command, label: string, args: Array<string>): boolean;
    reloadConfig(): void;
    getPluginLoader(): PluginLoader;
    getConfig(): FileConfiguration;
    saveResource(resourcePath: string, replace: boolean): void;
    isEnabled(): boolean;
    getDescription(): PluginDescriptionFile;
    getDataFolder(): any;
    getDefaultWorldGenerator(worldName: string, id: string): ChunkGenerator;
    isNaggable(): boolean;
    getCommand(_name: string): PluginCommand;
    setNaggable(canNag: boolean): void;
    onTabComplete(sender: CommandSender, command: Command, alias: string, args: Array<string>): any;
    onEnable(): void;
    onDisable(): void;
    getName(): string;
}
export default class JavaPlugin {
    static get $javaClass(): any;
    constructor();
    static getProvidingPlugin(clazz: any): JavaPlugin;
    static getPlugin(clazz: any): JavaPlugin;
}
