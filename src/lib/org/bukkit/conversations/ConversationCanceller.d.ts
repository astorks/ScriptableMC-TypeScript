import Conversation from '../../../org/bukkit/conversations/Conversation.js';
import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js';
export default interface ConversationCanceller {
    clone(): any;
    clone(): ConversationCanceller;
    setConversation(arg0: Conversation): void;
    cancelBasedOnInput(arg0: ConversationContext, arg1: string): boolean;
}
export default class ConversationCanceller {
    static get $javaClass(): any;
}