import Command from '../../../org/bukkit/command/Command.js';
import CommandSender from '../../../org/bukkit/command/CommandSender.js';
import Location from '../../../org/bukkit/Location.js';
export default interface CommandMap {
    dispatch(arg0: CommandSender, arg1: string): boolean;
    register(arg0: string, arg1: Command): boolean;
    register(arg0: string, arg1: string, arg2: Command): boolean;
    getCommand(arg0: string): Command;
    tabComplete(arg0: CommandSender, arg1: string): Array<string>;
    tabComplete(arg0: CommandSender, arg1: string, arg2: Location): Array<string>;
    registerAll(arg0: string, arg1: Array<any>): void;
    clearCommands(): void;
}
export default class CommandMap {
    static get $javaClass(): any;
}
