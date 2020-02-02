import Command from '../../../org/bukkit/command/Command.js';
import CommandExecutor from '../../../org/bukkit/command/CommandExecutor.js';
import CommandMap from '../../../org/bukkit/command/CommandMap.js';
import CommandSender from '../../../org/bukkit/command/CommandSender.js';
import Location from '../../../org/bukkit/Location.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import PluginIdentifiableCommand from '../../../org/bukkit/command/PluginIdentifiableCommand.js';
import TabCompleter from '../../../org/bukkit/command/TabCompleter.js';
export default interface PluginCommand extends Command, PluginIdentifiableCommand {
    execute(sender: CommandSender, commandLabel: string, args: Array<string>): boolean;
    getPlugin(): Plugin;
    setTabCompleter(completer: TabCompleter): void;
    getTabCompleter(): TabCompleter;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>): any;
    setExecutor(executor: CommandExecutor): void;
    getExecutor(): CommandExecutor;
    getName(): string;
    isRegistered(): boolean;
    register(commandMap: CommandMap): boolean;
    setName(_name: string): boolean;
    getPermission(): string;
    setPermission(permission: string): void;
    unregister(commandMap: CommandMap): boolean;
    getDescription(): string;
    setAliases(aliases: any): Command;
    setLabel(_name: string): boolean;
    getAliases(): any;
    setDescription(description: string): Command;
    getUsage(): string;
    setUsage(usage: string): Command;
    getLabel(): string;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): any;
    testPermission(target: CommandSender): boolean;
    testPermissionSilent(target: CommandSender): boolean;
    setPermissionMessage(permissionMessage: string): Command;
    getPermissionMessage(): string;
}
export default class PluginCommand {
    static get $javaClass(): any;
    static broadcastCommandMessage(source: CommandSender, message: string): void;
    static broadcastCommandMessage(source: CommandSender, message: string, sendToSource: boolean): void;
}
