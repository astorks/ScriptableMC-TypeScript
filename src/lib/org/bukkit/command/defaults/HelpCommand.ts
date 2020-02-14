declare var Java: any;
import BukkitCommand from '../../../../org/bukkit/command/defaults/BukkitCommand.js'
import Command from '../../../../org/bukkit/command/Command.js'
import CommandMap from '../../../../org/bukkit/command/CommandMap.js'
import CommandSender from '../../../../org/bukkit/command/CommandSender.js'
import Location from '../../../../org/bukkit/Location.js'

export default interface HelpCommand extends BukkitCommand {
	tabComplete(sender: CommandSender, alias: string, args: Array<string>): Array<string>;
	execute(sender: CommandSender, currentAlias: string, args: Array<string>): boolean;
	unregister(commandMap: CommandMap): boolean;
	testPermission(target: CommandSender): boolean;
	getDescription(): string;
	tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): Array<string>;
	testPermissionSilent(target: CommandSender): boolean;
	getLabel(): string;
	setLabel(_name: string): boolean;
	getAliases(): Array<string>;
	getPermissionMessage(): string;
	getUsage(): string;
	setAliases(aliases: Array<any>): Command;
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

export default class HelpCommand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.defaults.HelpCommand');
	}
	constructor();
	constructor(...args: any[]) {
		return new HelpCommand.$javaClass(...args);
	}
	public static broadcastCommandMessage(source: CommandSender, message: string, sendToSource: boolean): void;
	public static broadcastCommandMessage(source: CommandSender, message: string): void;
	public static broadcastCommandMessage(...args: any[]): any {
		return HelpCommand.$javaClass.broadcastCommandMessage(...args);
	}
}

