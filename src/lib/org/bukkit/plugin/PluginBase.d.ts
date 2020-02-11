import ChunkGenerator from '../../../org/bukkit/generator/ChunkGenerator.js';
import Command from '../../../org/bukkit/command/Command.js';
import CommandSender from '../../../org/bukkit/command/CommandSender.js';
import File from '../../../java/io/File.js';
import FileConfiguration from '../../../org/bukkit/configuration/file/FileConfiguration.js';
import InputStream from '../../../java/io/InputStream.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import PluginDescriptionFile from '../../../org/bukkit/plugin/PluginDescriptionFile.js';
import PluginLoader from '../../../org/bukkit/plugin/PluginLoader.js';
import Server from '../../../org/bukkit/Server.js';
export default interface PluginBase extends Plugin {
    getName(): string;
    getResource(arg0: string): InputStream;
    getLogger(): any;
    onLoad(): void;
    onDisable(): void;
    onEnable(): void;
    getServer(): Server;
    getDefaultWorldGenerator(arg0: string, arg1: string): ChunkGenerator;
    saveConfig(): void;
    isNaggable(): boolean;
    saveResource(arg0: string, arg1: boolean): void;
    getPluginLoader(): PluginLoader;
    reloadConfig(): void;
    getDataFolder(): File;
    setNaggable(arg0: boolean): void;
    getConfig(): FileConfiguration;
    saveDefaultConfig(): void;
    getDescription(): PluginDescriptionFile;
    isEnabled(): boolean;
    onTabComplete(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): Array<string>;
    onCommand(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): boolean;
}
export default class PluginBase {
    static get $javaClass(): any;
    constructor();
}
