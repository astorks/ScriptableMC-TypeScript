import Conversation from '../../../org/bukkit/conversations/Conversation.js';
import ConversationCanceller from '../../../org/bukkit/conversations/ConversationCanceller.js';
import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js';
export default interface ExactMatchConversationCanceller extends ConversationCanceller {
    clone(): ConversationCanceller;
    clone(): any;
    setConversation(conversation: Conversation): void;
    cancelBasedOnInput(context: ConversationContext, input: string): boolean;
}
export default class ExactMatchConversationCanceller {
    static get $javaClass(): any;
    constructor(escapeSequence: string);
}
