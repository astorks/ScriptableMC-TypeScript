declare var Java: any;
import Command from '../../../org/bukkit/command/Command.js'
import CommandExecutor from '../../../org/bukkit/command/CommandExecutor.js'
import CommandMap from '../../../org/bukkit/command/CommandMap.js'
import CommandSender from '../../../org/bukkit/command/CommandSender.js'
import Location from '../../../org/bukkit/Location.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import PluginIdentifiableCommand from '../../../org/bukkit/command/PluginIdentifiableCommand.js'
import TabCompleter from '../../../org/bukkit/command/TabCompleter.js'

export default interface PluginCommand extends Command, PluginIdentifiableCommand {
	execute(sender: CommandSender, commandLabel: string, args: Array<string>): boolean;
	getAliases(): Array<string>;
	getDescription(): string;
	getExecutor(): CommandExecutor;
	getLabel(): string;
	getName(): string;
	getPermission(): string;
	getPermissionMessage(): string;
	getPlugin(): Plugin;
	getTabCompleter(): TabCompleter;
	getUsage(): string;
	isRegistered(): boolean;
	register(commandMap: CommandMap): boolean;
	setAliases(aliases: Array<any>): Command;
	setDescription(description: string): Command;
	setExecutor(executor: CommandExecutor): void;
	setLabel(_name: string): boolean;
	setName(_name: string): boolean;
	setPermission(permission: string): void;
	setPermissionMessage(permissionMessage: string): Command;
	setTabCompleter(completer: TabCompleter): void;
	setUsage(usage: string): Command;
	tabComplete(sender: CommandSender, alias: string, args: Array<string>): Array<string>;
	tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): Array<string>;
	testPermission(target: CommandSender): boolean;
	testPermissionSilent(target: CommandSender): boolean;
	unregister(commandMap: CommandMap): boolean;
}

export default class PluginCommand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.PluginCommand');
	}

	public static broadcastCommandMessage(source: CommandSender, message: string): void;
	public static broadcastCommandMessage(source: CommandSender, message: string, sendToSource: boolean): void;
	public static broadcastCommandMessage(...args: any[]): any {
		return PluginCommand.$javaClass.broadcastCommandMessage(...args);
	}

}

