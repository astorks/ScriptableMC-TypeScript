import { CommandSender } from '../../../org/bukkit/command/CommandSender.js';
export interface HelpTopic {
    canSee(arg0: CommandSender): boolean;
    amendCanSee(amendedPermission: string): void;
    getShortText(): string;
    getFullText(forWho: CommandSender): string;
    amendTopic(amendedShortText: string, amendedFullText: string): void;
    getName(): string;
}
export declare class HelpTopic {
    static get $javaClass(): any;
    constructor();
}
