import { ConversationContext } from '../../../org/bukkit/conversations/ConversationContext.js';
export interface ConversationPrefix {
    getPrefix(arg0: ConversationContext): string;
}
export declare class ConversationPrefix {
    static get $javaClass(): any;
}
