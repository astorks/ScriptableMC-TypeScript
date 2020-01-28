import { Server } from '../../../org/bukkit/Server.js';
import { PluginDescriptionFile } from '../../../org/bukkit/plugin/PluginDescriptionFile.js';
import { PluginLoader } from '../../../org/bukkit/plugin/PluginLoader.js';
import { FileConfiguration } from '../../../org/bukkit/configuration/file/FileConfiguration.js';
import { ChunkGenerator } from '../../../org/bukkit/generator/ChunkGenerator.js';
import { CommandSender } from '../../../org/bukkit/command/CommandSender.js';
import { Command } from '../../../org/bukkit/command/Command.js';
import { TabExecutor } from '../../../org/bukkit/command/TabExecutor.js';
export interface Plugin extends TabExecutor {
    getLogger(): any;
    onDisable(): void;
    getServer(): Server;
    onLoad(): void;
    onEnable(): void;
    isEnabled(): boolean;
    getDescription(): PluginDescriptionFile;
    getDataFolder(): any;
    getPluginLoader(): PluginLoader;
    getConfig(): FileConfiguration;
    reloadConfig(): void;
    saveConfig(): void;
    saveDefaultConfig(): void;
    saveResource(arg0: string, arg1: boolean): void;
    getDefaultWorldGenerator(arg0: string, arg1: string): ChunkGenerator;
    isNaggable(): boolean;
    setNaggable(arg0: boolean): void;
    getName(): string;
    getResource(arg0: string): any;
    onTabComplete(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): any;
    onCommand(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): boolean;
}
export declare class Plugin {
    static get $javaClass(): any;
}
