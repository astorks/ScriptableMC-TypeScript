import BukkitCommand from '../../../../org/bukkit/command/defaults/BukkitCommand.js';
import Command from '../../../../org/bukkit/command/Command.js';
import CommandMap from '../../../../org/bukkit/command/CommandMap.js';
import CommandSender from '../../../../org/bukkit/command/CommandSender.js';
import Location from '../../../../org/bukkit/Location.js';
export default interface ReloadCommand extends BukkitCommand {
    execute(sender: CommandSender, currentAlias: string, args: Array<string>): boolean;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>): Array<string>;
    getName(): string;
    isRegistered(): boolean;
    register(commandMap: CommandMap): boolean;
    setName(_name: string): boolean;
    getPermission(): string;
    setPermission(permission: string): void;
    unregister(commandMap: CommandMap): boolean;
    getDescription(): string;
    getUsage(): string;
    testPermission(target: CommandSender): boolean;
    setAliases(aliases: Array<any>): Command;
    setDescription(description: string): Command;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): Array<string>;
    getLabel(): string;
    setUsage(usage: string): Command;
    getAliases(): Array<string>;
    setLabel(_name: string): boolean;
    testPermissionSilent(target: CommandSender): boolean;
    getPermissionMessage(): string;
    setPermissionMessage(permissionMessage: string): Command;
}
export default class ReloadCommand {
    static get $javaClass(): any;
    constructor(_name: string);
    static broadcastCommandMessage(source: CommandSender, message: string): void;
    static broadcastCommandMessage(source: CommandSender, message: string, sendToSource: boolean): void;
}
