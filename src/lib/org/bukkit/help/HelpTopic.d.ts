import CommandSender from '../../../org/bukkit/command/CommandSender.js';
export default interface HelpTopic {
    getName(): string;
    canSee(arg0: CommandSender): boolean;
    getShortText(): string;
    getFullText(forWho: CommandSender): string;
    amendCanSee(amendedPermission: string): void;
    amendTopic(amendedShortText: string, amendedFullText: string): void;
}
export default class HelpTopic {
    static get $javaClass(): any;
    constructor();
}
