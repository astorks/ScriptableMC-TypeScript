declare var Java: any;
import Command from '../../../org/bukkit/command/Command.js'
import CommandMap from '../../../org/bukkit/command/CommandMap.js'
import CommandSender from '../../../org/bukkit/command/CommandSender.js'
import Location from '../../../org/bukkit/Location.js'
import Server from '../../../org/bukkit/Server.js'

export default interface SimpleCommandMap extends CommandMap {
	clearCommands(): void;
	dispatch(sender: CommandSender, commandLine: string): boolean;
	getCommand(_name: string): Command;
	getCommands(): any;
	register(fallbackPrefix: string, command: Command): boolean;
	register(label: string, fallbackPrefix: string, command: Command): boolean;
	registerAll(fallbackPrefix: string, commands: Array<any>): void;
	registerServerAliases(): void;
	setFallbackCommands(): void;
	tabComplete(sender: CommandSender, cmdLine: string): Array<string>;
	tabComplete(sender: CommandSender, cmdLine: string, location: Location): Array<string>;
}

export default class SimpleCommandMap {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.SimpleCommandMap');
	}

	constructor(server: Server);
	constructor(...args: any[]) {
		return new SimpleCommandMap.$javaClass(...args);
	}

}

