import { ConversationAbandonedEvent } from '../../../org/bukkit/conversations/ConversationAbandonedEvent.js';
export interface ConversationAbandonedListener {
    conversationAbandoned(arg0: ConversationAbandonedEvent): void;
}
export declare class ConversationAbandonedListener {
    static get $javaClass(): any;
}
