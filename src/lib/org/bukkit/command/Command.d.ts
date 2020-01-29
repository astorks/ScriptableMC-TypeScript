import { CommandMap } from '../../../org/bukkit/command/CommandMap.js';
import { CommandSender } from '../../../org/bukkit/command/CommandSender.js';
import { Location } from '../../../org/bukkit/Location.js';
export interface Command {
    getName(): string;
    isRegistered(): boolean;
    register(commandMap: CommandMap): boolean;
    execute(arg0: CommandSender, arg1: string, arg2: Array<string>): boolean;
    setName(_name: string): boolean;
    getPermission(): string;
    setPermission(permission: string): void;
    unregister(commandMap: CommandMap): boolean;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>): any;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): any;
    getDescription(): string;
    testPermission(target: CommandSender): boolean;
    getLabel(): string;
    setLabel(_name: string): boolean;
    getAliases(): any;
    getUsage(): string;
    setAliases(aliases: any): Command;
    setDescription(description: string): Command;
    setUsage(usage: string): Command;
    getPermissionMessage(): string;
    testPermissionSilent(target: CommandSender): boolean;
    setPermissionMessage(permissionMessage: string): Command;
}
export declare class Command {
    static get $javaClass(): any;
    static broadcastCommandMessage(source: CommandSender, message: string): void;
    static broadcastCommandMessage(source: CommandSender, message: string, sendToSource: boolean): void;
}
