import Conversation from '../../../org/bukkit/conversations/Conversation.js';
import ConversationCanceller from '../../../org/bukkit/conversations/ConversationCanceller.js';
import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface InactivityConversationCanceller extends ConversationCanceller {
    clone(): ConversationCanceller;
    clone(): any;
    setConversation(conversation: Conversation): void;
    cancelBasedOnInput(context: ConversationContext, input: string): boolean;
}
export default class InactivityConversationCanceller {
    static get $javaClass(): any;
    constructor(plugin: Plugin, timeoutSeconds: number);
}
