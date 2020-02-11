import CommandSender from '../../../org/bukkit/command/CommandSender.js';
import HelpTopic from '../../../org/bukkit/help/HelpTopic.js';
export default interface IndexHelpTopic extends HelpTopic {
    canSee(sender: CommandSender): boolean;
    getFullText(sender: CommandSender): string;
    amendCanSee(amendedPermission: string): void;
    getName(): string;
    getShortText(): string;
    amendTopic(amendedShortText: string, amendedFullText: string): void;
}
export default class IndexHelpTopic {
    static get $javaClass(): any;
    constructor(_name: string, shortText: string, permission: string, topics: any);
    constructor(_name: string, shortText: string, permission: string, topics: any, preamble: string);
}
