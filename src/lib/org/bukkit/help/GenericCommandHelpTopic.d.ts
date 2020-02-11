import Command from '../../../org/bukkit/command/Command.js';
import CommandSender from '../../../org/bukkit/command/CommandSender.js';
import HelpTopic from '../../../org/bukkit/help/HelpTopic.js';
export default interface GenericCommandHelpTopic extends HelpTopic {
    canSee(sender: CommandSender): boolean;
    getName(): string;
    amendCanSee(amendedPermission: string): void;
    getFullText(forWho: CommandSender): string;
    getShortText(): string;
    amendTopic(amendedShortText: string, amendedFullText: string): void;
}
export default class GenericCommandHelpTopic {
    static get $javaClass(): any;
    constructor(command: Command);
}
