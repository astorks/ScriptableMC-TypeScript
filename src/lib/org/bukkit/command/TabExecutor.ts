declare var Java: any;
import Command from '../../../org/bukkit/command/Command.js'
import CommandExecutor from '../../../org/bukkit/command/CommandExecutor.js'
import CommandSender from '../../../org/bukkit/command/CommandSender.js'
import TabCompleter from '../../../org/bukkit/command/TabCompleter.js'

export default interface TabExecutor extends TabCompleter, CommandExecutor {
	onCommand(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): boolean;
	onTabComplete(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): Array<string>;
}

export default class TabExecutor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.TabExecutor');
	}

}

