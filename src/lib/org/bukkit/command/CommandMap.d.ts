import { CommandSender } from '../../../org/bukkit/command/CommandSender.js';
import { Command } from '../../../org/bukkit/command/Command.js';
import { Location } from '../../../org/bukkit/Location.js';
export interface CommandMap {
    dispatch(arg0: CommandSender, arg1: string): boolean;
    register(arg0: string, arg1: Command): boolean;
    register(arg0: string, arg1: string, arg2: Command): boolean;
    tabComplete(arg0: CommandSender, arg1: string): any;
    tabComplete(arg0: CommandSender, arg1: string, arg2: Location): any;
    getCommand(arg0: string): Command;
    registerAll(arg0: string, arg1: any): void;
    clearCommands(): void;
}
export declare class CommandMap {
    static get $javaClass(): any;
}
