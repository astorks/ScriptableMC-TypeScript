declare var Java: any;
import BukkitCommand from '../../../../org/bukkit/command/defaults/BukkitCommand.js'
import Command from '../../../../org/bukkit/command/Command.js'
import CommandMap from '../../../../org/bukkit/command/CommandMap.js'
import CommandSender from '../../../../org/bukkit/command/CommandSender.js'
import Location from '../../../../org/bukkit/Location.js'

export default interface TimingsCommand extends BukkitCommand {
	execute(sender: CommandSender, currentAlias: string, args: Array<string>): boolean;
	executeSpigotTimings(sender: CommandSender, args: Array<string>): void;
	getAliases(): Array<string>;
	getDescription(): string;
	getLabel(): string;
	getName(): string;
	getPermission(): string;
	getPermissionMessage(): string;
	getUsage(): string;
	isRegistered(): boolean;
	register(commandMap: CommandMap): boolean;
	setAliases(aliases: Array<any>): Command;
	setDescription(description: string): Command;
	setLabel(_name: string): boolean;
	setName(_name: string): boolean;
	setPermission(permission: string): void;
	setPermissionMessage(permissionMessage: string): Command;
	setUsage(usage: string): Command;
	tabComplete(sender: CommandSender, alias: string, args: Array<string>): Array<string>;
	tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): Array<string>;
	testPermission(target: CommandSender): boolean;
	testPermissionSilent(target: CommandSender): boolean;
	unregister(commandMap: CommandMap): boolean;
}

export default class TimingsCommand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.defaults.TimingsCommand');
	}

	constructor(_name: string);
	constructor(...args: any[]) {
		return new TimingsCommand.$javaClass(...args);
	}

	public static broadcastCommandMessage(source: CommandSender, message: string): void;
	public static broadcastCommandMessage(source: CommandSender, message: string, sendToSource: boolean): void;
	public static broadcastCommandMessage(...args: any[]): any {
		return TimingsCommand.$javaClass.broadcastCommandMessage(...args);
	}

}

