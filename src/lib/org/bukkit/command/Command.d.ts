import { CommandMap } from '../../../org/bukkit/command/CommandMap.js';
import { CommandSender } from '../../../org/bukkit/command/CommandSender.js';
import { Location } from '../../../org/bukkit/Location.js';
export interface Command {
    unregister(commandMap: CommandMap): boolean;
    testPermissionSilent(target: CommandSender): boolean;
    getLabel(): string;
    setLabel(_name: string): boolean;
    getAliases(): any;
    getPermissionMessage(): string;
    getUsage(): string;
    setAliases(aliases: any): Command;
    setDescription(description: string): Command;
    setPermissionMessage(permissionMessage: string): Command;
    setUsage(usage: string): Command;
    getDescription(): string;
    testPermission(target: CommandSender): boolean;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>): any;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): any;
    register(commandMap: CommandMap): boolean;
    getName(): string;
    isRegistered(): boolean;
    execute(arg0: CommandSender, arg1: string, arg2: Array<string>): boolean;
    setName(_name: string): boolean;
    setPermission(permission: string): void;
    getPermission(): string;
}
export declare class Command {
    static get $javaClass(): any;
    static broadcastCommandMessage(source: CommandSender, message: string, sendToSource: boolean): void;
    static broadcastCommandMessage(source: CommandSender, message: string): void;
}
