import Conversation from '../../../org/bukkit/conversations/Conversation.js';
import ConversationCanceller from '../../../org/bukkit/conversations/ConversationCanceller.js';
import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface InactivityConversationCanceller extends ConversationCanceller {
    setConversation(conversation: Conversation): void;
    cancelBasedOnInput(context: ConversationContext, input: string): boolean;
    clone(): any;
    clone(): ConversationCanceller;
}
export default class InactivityConversationCanceller {
    static get $javaClass(): any;
    constructor(plugin: Plugin, timeoutSeconds: number);
}
