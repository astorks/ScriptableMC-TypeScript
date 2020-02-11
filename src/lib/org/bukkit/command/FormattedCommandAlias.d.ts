import Command from '../../../org/bukkit/command/Command.js';
import CommandMap from '../../../org/bukkit/command/CommandMap.js';
import CommandSender from '../../../org/bukkit/command/CommandSender.js';
import Location from '../../../org/bukkit/Location.js';
export default interface FormattedCommandAlias extends Command {
    execute(sender: CommandSender, commandLabel: string, args: Array<string>): boolean;
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
    tabComplete(sender: CommandSender, alias: string, args: Array<string>): Array<string>;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): Array<string>;
    getLabel(): string;
    setUsage(usage: string): Command;
    testPermission(target: CommandSender): boolean;
    setDescription(description: string): Command;
    setLabel(_name: string): boolean;
    getUsage(): string;
    getAliases(): Array<string>;
}
export default class FormattedCommandAlias {
    static get $javaClass(): any;
    constructor(alias: string, formatStrings: Array<string>);
    static broadcastCommandMessage(source: CommandSender, message: string, sendToSource: boolean): void;
    static broadcastCommandMessage(source: CommandSender, message: string): void;
}
