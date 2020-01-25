declare var Java: any;
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {CommandExecutor} from '../../../org/bukkit/command/CommandExecutor.js'
import {TabCompleter} from '../../../org/bukkit/command/TabCompleter.js'
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {CommandMap} from '../../../org/bukkit/command/CommandMap.js'
import {Location} from '../../../org/bukkit/Location.js'
import {Command} from '../../../org/bukkit/command/Command.js'
import {PluginIdentifiableCommand} from '../../../org/bukkit/command/PluginIdentifiableCommand.js'

export interface PluginCommand extends Command, PluginIdentifiableCommand {
	getPlugin(): Plugin;
	setExecutor(executor: CommandExecutor): void;
	getExecutor(): CommandExecutor;
	setTabCompleter(completer: TabCompleter): void;
	getTabCompleter(): TabCompleter;
	tabComplete(sender: CommandSender, alias: string, args: Array<string>): any;
	execute(sender: CommandSender, commandLabel: string, args: Array<string>): boolean;
	unregister(commandMap: CommandMap): boolean;
	getDescription(): string;
	tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): any;
	testPermission(target: CommandSender): boolean;
	testPermissionSilent(target: CommandSender): boolean;
	getLabel(): string;
	setLabel(_name: string): boolean;
	getAliases(): any;
	getPermissionMessage(): string;
	getUsage(): string;
	setAliases(aliases: any): Command;
	setDescription(description: string): Command;
	setPermissionMessage(permissionMessage: string): Command;
	setUsage(usage: string): Command;
	register(commandMap: CommandMap): boolean;
	getName(): string;
	isRegistered(): boolean;
	setName(_name: string): boolean;
	setPermission(permission: string): void;
	getPermission(): string;
}

export class PluginCommand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.PluginCommand');
	}
	public static broadcastCommandMessage(source: CommandSender, message: string): void;
	public static broadcastCommandMessage(source: CommandSender, message: string, sendToSource: boolean): void;
	public static broadcastCommandMessage(...args: any[]): any {
		return PluginCommand.$javaClass.broadcastCommandMessage(...args);
	}
}

