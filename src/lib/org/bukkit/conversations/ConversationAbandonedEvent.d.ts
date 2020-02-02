import Conversation from '../../../org/bukkit/conversations/Conversation.js';
import ConversationCanceller from '../../../org/bukkit/conversations/ConversationCanceller.js';
import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js';
export default interface ConversationAbandonedEvent {
    getContext(): ConversationContext;
    gracefulExit(): boolean;
    getCanceller(): ConversationCanceller;
    getSource(): any;
}
export default class ConversationAbandonedEvent {
    static get $javaClass(): any;
    constructor(conversation: Conversation);
    constructor(conversation: Conversation, canceller: ConversationCanceller);
}
