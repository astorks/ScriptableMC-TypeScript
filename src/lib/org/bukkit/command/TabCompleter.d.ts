import Command from '../../../org/bukkit/command/Command.js';
import CommandSender from '../../../org/bukkit/command/CommandSender.js';
export default interface TabCompleter {
    onTabComplete(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): any;
}
export default class TabCompleter {
    static get $javaClass(): any;
}
