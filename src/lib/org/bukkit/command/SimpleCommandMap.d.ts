import Command from '../../../org/bukkit/command/Command.js';
import CommandMap from '../../../org/bukkit/command/CommandMap.js';
import CommandSender from '../../../org/bukkit/command/CommandSender.js';
import Location from '../../../org/bukkit/Location.js';
import Server from '../../../org/bukkit/Server.js';
export default interface SimpleCommandMap extends CommandMap {
    dispatch(sender: CommandSender, commandLine: string): boolean;
    register(label: string, fallbackPrefix: string, command: Command): boolean;
    register(fallbackPrefix: string, command: Command): boolean;
    getCommand(_name: string): Command;
    tabComplete(sender: CommandSender, cmdLine: string, location: Location): any;
    tabComplete(sender: CommandSender, cmdLine: string): any;
    getCommands(): any;
    registerAll(fallbackPrefix: string, commands: any): void;
    clearCommands(): void;
    registerServerAliases(): void;
    setFallbackCommands(): void;
}
export default class SimpleCommandMap {
    static get $javaClass(): any;
    constructor(server: Server);
}
