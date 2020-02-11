import Conversable from '../../../org/bukkit/conversations/Conversable.js';
import Conversation from '../../../org/bukkit/conversations/Conversation.js';
import ConversationAbandonedListener from '../../../org/bukkit/conversations/ConversationAbandonedListener.js';
import ConversationCanceller from '../../../org/bukkit/conversations/ConversationCanceller.js';
import ConversationPrefix from '../../../org/bukkit/conversations/ConversationPrefix.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import Prompt from '../../../org/bukkit/conversations/Prompt.js';
export default interface ConversationFactory {
    addConversationAbandonedListener(listener: ConversationAbandonedListener): ConversationFactory;
    withInitialSessionData(initialSessionData: any): ConversationFactory;
    thatExcludesNonPlayersWithMessage(playerOnlyMessage: string): ConversationFactory;
    withConversationCanceller(canceller: ConversationCanceller): ConversationFactory;
    withTimeout(timeoutSeconds: number): ConversationFactory;
    withFirstPrompt(firstPrompt: Prompt): ConversationFactory;
    withLocalEcho(localEchoEnabled: boolean): ConversationFactory;
    buildConversation(forWhom: Conversable): Conversation;
    withModality(modal: boolean): ConversationFactory;
    withPrefix(prefix: ConversationPrefix): ConversationFactory;
    withEscapeSequence(escapeSequence: string): ConversationFactory;
}
export default class ConversationFactory {
    static get $javaClass(): any;
    constructor(plugin: Plugin);
}
