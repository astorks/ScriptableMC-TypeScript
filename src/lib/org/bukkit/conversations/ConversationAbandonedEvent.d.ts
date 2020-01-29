import { ConversationContext } from '../../../org/bukkit/conversations/ConversationContext.js';
import { ConversationCanceller } from '../../../org/bukkit/conversations/ConversationCanceller.js';
import { Conversation } from '../../../org/bukkit/conversations/Conversation.js';
export interface ConversationAbandonedEvent {
    getContext(): ConversationContext;
    getCanceller(): ConversationCanceller;
    gracefulExit(): boolean;
    getSource(): any;
}
export declare class ConversationAbandonedEvent {
    static get $javaClass(): any;
    constructor(conversation: Conversation);
    constructor(conversation: Conversation, canceller: ConversationCanceller);
}
