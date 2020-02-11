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
    tabComplete(sender: CommandSender, alias: string, args: Array<string>): Array<string>;
    getExecutor(): CommandExecutor;
    setTabCompleter(completer: TabCompleter): void;
    setExecutor(executor: CommandExecutor): void;
    getTabCompleter(): TabCompleter;
    getName(): string;
    isRegistered(): boolean;
    register(commandMap: CommandMap): boolean;
    setName(_name: string): boolean;
    getPermission(): string;
    setPermission(permission: string): void;
    unregister(commandMap: CommandMap): boolean;
    getDescription(): string;
    getUsage(): string;
    testPermission(target: CommandSender): boolean;
    setAliases(aliases: Array<any>): Command;
    setDescription(description: string): Command;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): Array<string>;
    getLabel(): string;
    setUsage(usage: string): Command;
    getAliases(): Array<string>;
    setLabel(_name: string): boolean;
    testPermissionSilent(target: CommandSender): boolean;
    getPermissionMessage(): string;
    setPermissionMessage(permissionMessage: string): Command;
}
export default class PluginCommand {
    static get $javaClass(): any;
    static broadcastCommandMessage(source: CommandSender, message: string): void;
    static broadcastCommandMessage(source: CommandSender, message: string, sendToSource: boolean): void;
}
