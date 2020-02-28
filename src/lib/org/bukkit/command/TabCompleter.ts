declare var Java: any;
import Command from './Command.js'
import CommandSender from './CommandSender.js'

export default interface TabCompleter {
	onTabComplete(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): Array<string>;
}

export default class TabCompleter {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.TabCompleter');
	}

}

