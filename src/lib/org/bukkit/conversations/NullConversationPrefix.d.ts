import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js';
import ConversationPrefix from '../../../org/bukkit/conversations/ConversationPrefix.js';
export default interface NullConversationPrefix extends ConversationPrefix {
    getPrefix(context: ConversationContext): string;
}
export default class NullConversationPrefix {
    static get $javaClass(): any;
    constructor();
}
