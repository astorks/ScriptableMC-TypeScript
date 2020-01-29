import { Server } from '../../../../org/bukkit/Server.js';
import { PluginDescriptionFile } from '../../../../org/bukkit/plugin/PluginDescriptionFile.js';
import { CommandSender } from '../../../../org/bukkit/command/CommandSender.js';
import { Command } from '../../../../org/bukkit/command/Command.js';
import { ChunkGenerator } from '../../../../org/bukkit/generator/ChunkGenerator.js';
import { PluginLoader } from '../../../../org/bukkit/plugin/PluginLoader.js';
import { FileConfiguration } from '../../../../org/bukkit/configuration/file/FileConfiguration.js';
import { PluginCommand } from '../../../../org/bukkit/command/PluginCommand.js';
import { PluginBase } from '../../../../org/bukkit/plugin/PluginBase.js';
export interface JavaPlugin extends PluginBase {
    getResource(filename: string): any;
    getLogger(): any;
    onLoad(): void;
    onEnable(): void;
    onDisable(): void;
    getServer(): Server;
    isEnabled(): boolean;
    getDescription(): PluginDescriptionFile;
    onTabComplete(sender: CommandSender, command: Command, alias: string, args: Array<string>): any;
    onCommand(sender: CommandSender, command: Command, label: string, args: Array<string>): boolean;
    getDefaultWorldGenerator(worldName: string, id: string): ChunkGenerator;
    reloadConfig(): void;
    saveDefaultConfig(): void;
    saveResource(resourcePath: string, replace: boolean): void;
    isNaggable(): boolean;
    getPluginLoader(): PluginLoader;
    getConfig(): FileConfiguration;
    getCommand(_name: string): PluginCommand;
    getDataFolder(): any;
    setNaggable(canNag: boolean): void;
    saveConfig(): void;
    getName(): string;
}
export declare class JavaPlugin {
    static get $javaClass(): any;
    constructor();
    static getPlugin(clazz: any): JavaPlugin;
    static getProvidingPlugin(clazz: any): JavaPlugin;
}
