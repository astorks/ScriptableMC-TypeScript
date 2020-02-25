declare var Java: any;
import Command from '../../../org/bukkit/command/Command.js'
import CommandSender from '../../../org/bukkit/command/CommandSender.js'
import Location from '../../../org/bukkit/Location.js'

export default interface CommandMap {
	clearCommands(): void;
	dispatch(arg0: CommandSender, arg1: string): boolean;
	getCommand(arg0: string): Command;
	register(arg0: string, arg1: Command): boolean;
	register(arg0: string, arg1: string, arg2: Command): boolean;
	registerAll(arg0: string, arg1: Array<any>): void;
	tabComplete(arg0: CommandSender, arg1: string): Array<string>;
	tabComplete(arg0: CommandSender, arg1: string, arg2: Location): Array<string>;
}

export default class CommandMap {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.CommandMap');
	}

}

