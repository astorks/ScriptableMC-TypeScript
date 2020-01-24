declare var Java: any;
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {TabCompleter} from '../../../org/bukkit/command/TabCompleter.js'
import {CommandExecutor} from '../../../org/bukkit/command/CommandExecutor.js'
import {CommandMap} from '../../../org/bukkit/command/CommandMap.js'
import {Command} from '../../../org/bukkit/command/Command.js'
import {Location} from '../../../org/bukkit/Location.js'
import {PluginIdentifiableCommand} from '../../../org/bukkit/command/PluginIdentifiableCommand.js'

export interface PluginCommand extends Command, PluginIdentifiableCommand {
	execute(sender: CommandSender, commandLabel: string, args: Array<string>): boolean;
	getPlugin(): Plugin;
	tabComplete(sender: CommandSender, alias: string, args: Array<string>): any;
	getTabCompleter(): TabCompleter;
	getExecutor(): CommandExecutor;
	setTabCompleter(completer: TabCompleter): void;
	setExecutor(executor: CommandExecutor): void;
	getName(): string;
	isRegistered(): boolean;
	register(commandMap: CommandMap): boolean;
	setName(_name: string): boolean;
	getPermission(): string;
	setPermission(permission: string): void;
	unregister(commandMap: CommandMap): boolean;
	setPermissionMessage(permissionMessage: string): Command;
	testPermissionSilent(target: CommandSender): boolean;
	getPermissionMessage(): string;
	testPermission(target: CommandSender): boolean;
	tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): any;
	getLabel(): string;
	getAliases(): any;
	setLabel(_name: string): boolean;
	getUsage(): string;
	setUsage(usage: string): Command;
	getDescription(): string;
	setAliases(aliases: any): Command;
	setDescription(description: string): Command;
}

export class PluginCommand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.PluginCommand');
	}
}

