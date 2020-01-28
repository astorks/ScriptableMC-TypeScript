import { Server } from '../../../../org/bukkit/Server.js';
import { PluginDescriptionFile } from '../../../../org/bukkit/plugin/PluginDescriptionFile.js';
import { CommandSender } from '../../../../org/bukkit/command/CommandSender.js';
import { Command } from '../../../../org/bukkit/command/Command.js';
import { PluginLoader } from '../../../../org/bukkit/plugin/PluginLoader.js';
import { FileConfiguration } from '../../../../org/bukkit/configuration/file/FileConfiguration.js';
import { PluginCommand } from '../../../../org/bukkit/command/PluginCommand.js';
import { ChunkGenerator } from '../../../../org/bukkit/generator/ChunkGenerator.js';
import { PluginBase } from '../../../../org/bukkit/plugin/PluginBase.js';
export interface JavaPlugin extends PluginBase {
    getLogger(): any;
    onDisable(): void;
    getServer(): Server;
    onLoad(): void;
    onEnable(): void;
    isEnabled(): boolean;
    getDescription(): PluginDescriptionFile;
    onCommand(sender: CommandSender, command: Command, label: string, args: Array<string>): boolean;
    onTabComplete(sender: CommandSender, command: Command, alias: string, args: Array<string>): any;
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
    getResource(filename: string): any;
    getName(): string;
}
export declare class JavaPlugin {
    static get $javaClass(): any;
    constructor();
    static getPlugin(clazz: any): JavaPlugin;
    static getProvidingPlugin(clazz: any): JavaPlugin;
}
