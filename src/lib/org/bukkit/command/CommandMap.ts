declare var Java: any;
import {Command} from '../../../org/bukkit/command/Command.js'
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {Location} from '../../../org/bukkit/Location.js'

export interface CommandMap {
	getCommand(arg0: string): Command;
	tabComplete(arg0: CommandSender, arg1: string, arg2: Location): any;
	tabComplete(arg0: CommandSender, arg1: string): any;
	registerAll(arg0: string, arg1: any): void;
	clearCommands(): void;
	dispatch(arg0: CommandSender, arg1: string): boolean;
	register(arg0: string, arg1: Command): boolean;
	register(arg0: string, arg1: string, arg2: Command): boolean;
}

export class CommandMap {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.CommandMap');
	}
}

