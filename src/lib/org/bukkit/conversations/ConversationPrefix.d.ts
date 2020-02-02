import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js';
export default interface ConversationPrefix {
    getPrefix(arg0: ConversationContext): string;
}
export default class ConversationPrefix {
    static get $javaClass(): any;
}
