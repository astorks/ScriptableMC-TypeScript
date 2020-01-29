import { Conversation } from '../../../org/bukkit/conversations/Conversation.js';
import { ConversationAbandonedEvent } from '../../../org/bukkit/conversations/ConversationAbandonedEvent.js';
export interface Conversable {
    sendRawMessage(arg0: string): void;
    abandonConversation(arg0: Conversation, arg1: ConversationAbandonedEvent): void;
    abandonConversation(arg0: Conversation): void;
    acceptConversationInput(arg0: string): void;
    isConversing(): boolean;
    beginConversation(arg0: Conversation): boolean;
}
export declare class Conversable {
    static get $javaClass(): any;
}
