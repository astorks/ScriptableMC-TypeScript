declare var Java: any;
import Command from '../../../org/bukkit/command/Command.js'
import CommandMap from '../../../org/bukkit/command/CommandMap.js'
import CommandSender from '../../../org/bukkit/command/CommandSender.js'
import Location from '../../../org/bukkit/Location.js'

export default interface MultipleCommandAlias extends Command {
	execute(sender: CommandSender, commandLabel: string, args: Array<string>): boolean;
	getAliases(): Array<string>;
	getCommands(): Array<Command>;
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

export default class MultipleCommandAlias {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.MultipleCommandAlias');
	}

	constructor(_name: string, commands: Array<Command>);
	constructor(...args: any[]) {
		return new MultipleCommandAlias.$javaClass(...args);
	}

	public static broadcastCommandMessage(source: CommandSender, message: string): void;
	public static broadcastCommandMessage(source: CommandSender, message: string, sendToSource: boolean): void;
	public static broadcastCommandMessage(...args: any[]): any {
		return MultipleCommandAlias.$javaClass.broadcastCommandMessage(...args);
	}

}

