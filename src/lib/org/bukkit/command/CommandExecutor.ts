declare var Java: any;
import Command from '../../../org/bukkit/command/Command.js'
import CommandSender from '../../../org/bukkit/command/CommandSender.js'

export default interface CommandExecutor {
	onCommand(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): boolean;
}

export default class CommandExecutor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.CommandExecutor');
	}

}

