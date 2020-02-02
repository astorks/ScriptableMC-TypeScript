import Command from '../../../org/bukkit/command/Command.js';
import CommandExecutor from '../../../org/bukkit/command/CommandExecutor.js';
import CommandSender from '../../../org/bukkit/command/CommandSender.js';
import TabCompleter from '../../../org/bukkit/command/TabCompleter.js';
export default interface TabExecutor extends TabCompleter, CommandExecutor {
    onTabComplete(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): any;
    onCommand(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): boolean;
}
export default class TabExecutor {
    static get $javaClass(): any;
}