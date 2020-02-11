import ChunkGenerator from '../../../org/bukkit/generator/ChunkGenerator.js';
import Command from '../../../org/bukkit/command/Command.js';
import CommandSender from '../../../org/bukkit/command/CommandSender.js';
import File from '../../../java/io/File.js';
import FileConfiguration from '../../../org/bukkit/configuration/file/FileConfiguration.js';
import InputStream from '../../../java/io/InputStream.js';
import PluginDescriptionFile from '../../../org/bukkit/plugin/PluginDescriptionFile.js';
import PluginLoader from '../../../org/bukkit/plugin/PluginLoader.js';
import Server from '../../../org/bukkit/Server.js';
import TabExecutor from '../../../org/bukkit/command/TabExecutor.js';
export default interface Plugin extends TabExecutor {
    getName(): string;
    getResource(arg0: string): InputStream;
    getLogger(): any;
    getServer(): Server;
    onDisable(): void;
    onLoad(): void;
    onEnable(): void;
    getDescription(): PluginDescriptionFile;
    getConfig(): FileConfiguration;
    setNaggable(arg0: boolean): void;
    saveDefaultConfig(): void;
    isEnabled(): boolean;
    reloadConfig(): void;
    saveConfig(): void;
    saveResource(arg0: string, arg1: boolean): void;
    getPluginLoader(): PluginLoader;
    isNaggable(): boolean;
    getDataFolder(): File;
    getDefaultWorldGenerator(arg0: string, arg1: string): ChunkGenerator;
    onTabComplete(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): Array<string>;
    onCommand(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): boolean;
}
export default class Plugin {
    static get $javaClass(): any;
}
