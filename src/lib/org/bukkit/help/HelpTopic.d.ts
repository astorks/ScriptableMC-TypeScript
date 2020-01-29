import { CommandSender } from '../../../org/bukkit/command/CommandSender.js';
export interface HelpTopic {
    getName(): string;
    canSee(arg0: CommandSender): boolean;
    getFullText(forWho: CommandSender): string;
    getShortText(): string;
    amendTopic(amendedShortText: string, amendedFullText: string): void;
    amendCanSee(amendedPermission: string): void;
}
export declare class HelpTopic {
    static get $javaClass(): any;
    constructor();
}
