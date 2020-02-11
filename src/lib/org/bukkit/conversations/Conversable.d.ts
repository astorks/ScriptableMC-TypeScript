import Conversation from '../../../org/bukkit/conversations/Conversation.js';
import ConversationAbandonedEvent from '../../../org/bukkit/conversations/ConversationAbandonedEvent.js';
export default interface Conversable {
    sendRawMessage(arg0: string): void;
    acceptConversationInput(arg0: string): void;
    abandonConversation(arg0: Conversation): void;
    abandonConversation(arg0: Conversation, arg1: ConversationAbandonedEvent): void;
    isConversing(): boolean;
    beginConversation(arg0: Conversation): boolean;
}
export default class Conversable {
    static get $javaClass(): any;
}
