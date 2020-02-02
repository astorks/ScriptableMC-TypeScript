import Conversation from '../../../org/bukkit/conversations/Conversation.js';
import ConversationCanceller from '../../../org/bukkit/conversations/ConversationCanceller.js';
import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js';
export default interface ExactMatchConversationCanceller extends ConversationCanceller {
    setConversation(conversation: Conversation): void;
    cancelBasedOnInput(context: ConversationContext, input: string): boolean;
    clone(): ConversationCanceller;
    clone(): any;
}
export default class ExactMatchConversationCanceller {
    static get $javaClass(): any;
    constructor(escapeSequence: string);
}
