import Command from '../../../org/bukkit/command/Command.js';
import CommandMap from '../../../org/bukkit/command/CommandMap.js';
import CommandSender from '../../../org/bukkit/command/CommandSender.js';
import Location from '../../../org/bukkit/Location.js';
import Server from '../../../org/bukkit/Server.js';
export default interface SimpleCommandMap extends CommandMap {
    tabComplete(sender: CommandSender, cmdLine: string, location: Location): Array<string>;
    tabComplete(sender: CommandSender, cmdLine: string): Array<string>;
    getCommand(_name: string): Command;
    getCommands(): any;
    registerAll(fallbackPrefix: string, commands: Array<any>): void;
    clearCommands(): void;
    setFallbackCommands(): void;
    registerServerAliases(): void;
    dispatch(sender: CommandSender, commandLine: string): boolean;
    register(fallbackPrefix: string, command: Command): boolean;
    register(label: string, fallbackPrefix: string, command: Command): boolean;
}
export default class SimpleCommandMap {
    static get $javaClass(): any;
    constructor(server: Server);
}
