import { ConversationCanceller } from '../../../org/bukkit/conversations/ConversationCanceller.js';
import { ConversationContext } from '../../../org/bukkit/conversations/ConversationContext.js';
import { Conversation } from '../../../org/bukkit/conversations/Conversation.js';
export interface ConversationAbandonedEvent {
    getCanceller(): ConversationCanceller;
    gracefulExit(): boolean;
    getContext(): ConversationContext;
    getSource(): any;
}
export declare class ConversationAbandonedEvent {
    static get $javaClass(): any;
    constructor(conversation: Conversation, canceller: ConversationCanceller);
    constructor(conversation: Conversation);
}
