import Command from '../../../../org/bukkit/command/Command.js';
import CommandMap from '../../../../org/bukkit/command/CommandMap.js';
import CommandSender from '../../../../org/bukkit/command/CommandSender.js';
import Location from '../../../../org/bukkit/Location.js';
export default interface BukkitCommand extends Command {
    unregister(commandMap: CommandMap): boolean;
    getDescription(): string;
    testPermission(target: CommandSender): boolean;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>): Array<string>;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): Array<string>;
    testPermissionSilent(target: CommandSender): boolean;
    getLabel(): string;
    setLabel(_name: string): boolean;
    getAliases(): Array<string>;
    getPermissionMessage(): string;
    getUsage(): string;
    setAliases(aliases: Array<any>): Command;
    setDescription(description: string): Command;
    setPermissionMessage(permissionMessage: string): Command;
    setUsage(usage: string): Command;
    register(commandMap: CommandMap): boolean;
    getName(): string;
    isRegistered(): boolean;
    execute(arg0: CommandSender, arg1: string, arg2: Array<string>): boolean;
    setName(_name: string): boolean;
    setPermission(permission: string): void;
    getPermission(): string;
}
export default class BukkitCommand {
    static get $javaClass(): any;
    static broadcastCommandMessage(source: CommandSender, message: string, sendToSource: boolean): void;
    static broadcastCommandMessage(source: CommandSender, message: string): void;
}
