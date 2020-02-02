import CommandMap from '../../../org/bukkit/command/CommandMap.js';
import CommandSender from '../../../org/bukkit/command/CommandSender.js';
import Location from '../../../org/bukkit/Location.js';
export default interface Command {
    getName(): string;
    isRegistered(): boolean;
    register(commandMap: CommandMap): boolean;
    execute(arg0: CommandSender, arg1: string, arg2: Array<string>): boolean;
    setName(_name: string): boolean;
    getPermission(): string;
    setPermission(permission: string): void;
    unregister(commandMap: CommandMap): boolean;
    getDescription(): string;
    setAliases(aliases: any): Command;
    setLabel(_name: string): boolean;
    getAliases(): any;
    setDescription(description: string): Command;
    getUsage(): string;
    setUsage(usage: string): Command;
    getLabel(): string;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>): any;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): any;
    testPermission(target: CommandSender): boolean;
    testPermissionSilent(target: CommandSender): boolean;
    setPermissionMessage(permissionMessage: string): Command;
    getPermissionMessage(): string;
}
export default class Command {
    static get $javaClass(): any;
    static broadcastCommandMessage(source: CommandSender, message: string): void;
    static broadcastCommandMessage(source: CommandSender, message: string, sendToSource: boolean): void;
}
