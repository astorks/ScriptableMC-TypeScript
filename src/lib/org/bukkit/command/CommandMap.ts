declare var Java: any;
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {Command} from '../../../org/bukkit/command/Command.js'
import {Location} from '../../../org/bukkit/Location.js'

export interface CommandMap {
	dispatch(sender: CommandSender, cmdLine: string): boolean;
	register(fallbackPrefix: string, command: Command): boolean;
	register(label: string, fallbackPrefix: string, command: Command): boolean;
	tabComplete(sender: CommandSender, cmdLine: string): any;
	tabComplete(sender: CommandSender, cmdLine: string, location: Location): any;
	getCommand(_name: string): Command;
	registerAll(fallbackPrefix: string, commands: any): void;
	clearCommands(): void;
}

export class CommandMap {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.CommandMap');
	}
}

