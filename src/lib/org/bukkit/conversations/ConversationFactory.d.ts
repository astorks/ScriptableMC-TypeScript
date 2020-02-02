import Conversable from '../../../org/bukkit/conversations/Conversable.js';
import Conversation from '../../../org/bukkit/conversations/Conversation.js';
import ConversationAbandonedListener from '../../../org/bukkit/conversations/ConversationAbandonedListener.js';
import ConversationCanceller from '../../../org/bukkit/conversations/ConversationCanceller.js';
import ConversationPrefix from '../../../org/bukkit/conversations/ConversationPrefix.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import Prompt from '../../../org/bukkit/conversations/Prompt.js';
export default interface ConversationFactory {
    addConversationAbandonedListener(listener: ConversationAbandonedListener): ConversationFactory;
    thatExcludesNonPlayersWithMessage(playerOnlyMessage: string): ConversationFactory;
    withConversationCanceller(canceller: ConversationCanceller): ConversationFactory;
    withInitialSessionData(initialSessionData: any): ConversationFactory;
    withEscapeSequence(escapeSequence: string): ConversationFactory;
    withLocalEcho(localEchoEnabled: boolean): ConversationFactory;
    withTimeout(timeoutSeconds: number): ConversationFactory;
    buildConversation(forWhom: Conversable): Conversation;
    withPrefix(prefix: ConversationPrefix): ConversationFactory;
    withModality(modal: boolean): ConversationFactory;
    withFirstPrompt(firstPrompt: Prompt): ConversationFactory;
}
export default class ConversationFactory {
    static get $javaClass(): any;
    constructor(plugin: Plugin);
}
