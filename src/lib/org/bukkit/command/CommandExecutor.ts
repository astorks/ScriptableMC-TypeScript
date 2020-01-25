declare var Java: any;
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {Command} from '../../../org/bukkit/command/Command.js'

export interface CommandExecutor {
	onCommand(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): boolean;
}

export class CommandExecutor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.CommandExecutor');
	}
}

