import { CommandSender } from '../../../org/bukkit/command/CommandSender.js';
import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
import { CommandExecutor } from '../../../org/bukkit/command/CommandExecutor.js';
import { TabCompleter } from '../../../org/bukkit/command/TabCompleter.js';
import { CommandMap } from '../../../org/bukkit/command/CommandMap.js';
import { Location } from '../../../org/bukkit/Location.js';
import { Command } from '../../../org/bukkit/command/Command.js';
import { PluginIdentifiableCommand } from '../../../org/bukkit/command/PluginIdentifiableCommand.js';
export interface PluginCommand extends Command, PluginIdentifiableCommand {
    execute(sender: CommandSender, commandLabel: string, args: Array<string>): boolean;
    getPlugin(): Plugin;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>): any;
    setExecutor(executor: CommandExecutor): void;
    setTabCompleter(completer: TabCompleter): void;
    getTabCompleter(): TabCompleter;
    getExecutor(): CommandExecutor;
    getName(): string;
    isRegistered(): boolean;
    register(commandMap: CommandMap): boolean;
    setName(_name: string): boolean;
    getPermission(): string;
    setPermission(permission: string): void;
    unregister(commandMap: CommandMap): boolean;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): any;
    getDescription(): string;
    testPermission(target: CommandSender): boolean;
    getLabel(): string;
    setLabel(_name: string): boolean;
    getAliases(): any;
    getUsage(): string;
    setAliases(aliases: any): Command;
    setDescription(description: string): Command;
    setUsage(usage: string): Command;
    getPermissionMessage(): string;
    testPermissionSilent(target: CommandSender): boolean;
    setPermissionMessage(permissionMessage: string): Command;
}
export declare class PluginCommand {
    static get $javaClass(): any;
    static broadcastCommandMessage(source: CommandSender, message: string): void;
    static broadcastCommandMessage(source: CommandSender, message: string, sendToSource: boolean): void;
}
