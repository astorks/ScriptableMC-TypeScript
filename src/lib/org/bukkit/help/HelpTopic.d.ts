import CommandSender from '../../../org/bukkit/command/CommandSender.js';
export default interface HelpTopic {
    getName(): string;
    canSee(arg0: CommandSender): boolean;
    amendCanSee(amendedPermission: string): void;
    getFullText(forWho: CommandSender): string;
    getShortText(): string;
    amendTopic(amendedShortText: string, amendedFullText: string): void;
}
export default class HelpTopic {
    static get $javaClass(): any;
    constructor();
}
