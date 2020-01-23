declare var Java: any;
import {CommandMap} from '../../../org/bukkit/command/CommandMap.js'
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {Location} from '../../../org/bukkit/Location.js'

export interface Command {
	getName(): string;
	isRegistered(): boolean;
	register(commandMap: CommandMap): boolean;
	execute(sender: CommandSender, commandLabel: string, args: Array<string>): boolean;
	setName(_name: string): boolean;
	getPermission(): string;
	setPermission(permission: string): void;
	unregister(commandMap: CommandMap): boolean;
	getDescription(): string;
	tabComplete(sender: CommandSender, alias: string, args: Array<string>): any;
	tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): any;
	testPermission(target: CommandSender): boolean;
	getUsage(): string;
	getLabel(): string;
	setLabel(_name: string): boolean;
	setDescription(description: string): Command;
	setAliases(aliases: any): Command;
	getAliases(): any;
	setUsage(usage: string): Command;
	testPermissionSilent(target: CommandSender): boolean;
	getPermissionMessage(): string;
	setPermissionMessage(permissionMessage: string): Command;
}

export class Command {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.Command');
	}
}

