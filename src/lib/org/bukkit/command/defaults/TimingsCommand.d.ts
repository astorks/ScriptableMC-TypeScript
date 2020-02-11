import BukkitCommand from '../../../../org/bukkit/command/defaults/BukkitCommand.js';
import Command from '../../../../org/bukkit/command/Command.js';
import CommandMap from '../../../../org/bukkit/command/CommandMap.js';
import CommandSender from '../../../../org/bukkit/command/CommandSender.js';
import Location from '../../../../org/bukkit/Location.js';
export default interface TimingsCommand extends BukkitCommand {
    execute(sender: CommandSender, currentAlias: string, args: Array<string>): boolean;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>): Array<string>;
    executeSpigotTimings(sender: CommandSender, args: Array<string>): void;
    getName(): string;
    isRegistered(): boolean;
    register(commandMap: CommandMap): boolean;
    setName(_name: string): boolean;
    getPermission(): string;
    setPermission(permission: string): void;
    unregister(commandMap: CommandMap): boolean;
    getPermissionMessage(): string;
    testPermissionSilent(target: CommandSender): boolean;
    setPermissionMessage(permissionMessage: string): Command;
    setAliases(aliases: Array<any>): Command;
    getDescription(): string;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): Array<string>;
    getLabel(): string;
    setUsage(usage: string): Command;
    testPermission(target: CommandSender): boolean;
    setDescription(description: string): Command;
    setLabel(_name: string): boolean;
    getUsage(): string;
    getAliases(): Array<string>;
}
export default class TimingsCommand {
    static get $javaClass(): any;
    constructor(_name: string);
    static broadcastCommandMessage(source: CommandSender, message: string, sendToSource: boolean): void;
    static broadcastCommandMessage(source: CommandSender, message: string): void;
}
