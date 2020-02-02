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
    getLogger(): any;
    onEnable(): void;
    onDisable(): void;
    getServer(): Server;
    onLoad(): void;
    isEnabled(): boolean;
    getDescription(): PluginDescriptionFile;
    onCommand(sender: CommandSender, command: Command, label: string, args: Array<string>): boolean;
    getDataFolder(): any;
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
    onTabComplete(sender: CommandSender, command: Command, alias: string, args: Array<string>): Array<string>;
    getResource(filename: string): any;
    getName(): string;
}
export default class JavaPlugin {
    static get $javaClass(): any;
    constructor();
    static getPlugin(clazz: any): JavaPlugin;
    static getProvidingPlugin(clazz: any): JavaPlugin;
}
