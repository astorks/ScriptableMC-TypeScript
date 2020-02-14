declare var Java: any;
import Conversable from '../../../org/bukkit/conversations/Conversable.js'
import Conversation from '../../../org/bukkit/conversations/Conversation.js'
import ConversationAbandonedListener from '../../../org/bukkit/conversations/ConversationAbandonedListener.js'
import ConversationCanceller from '../../../org/bukkit/conversations/ConversationCanceller.js'
import ConversationPrefix from '../../../org/bukkit/conversations/ConversationPrefix.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import Prompt from '../../../org/bukkit/conversations/Prompt.js'

export default interface ConversationFactory {
	addConversationAbandonedListener(listener: ConversationAbandonedListener): ConversationFactory;
	withConversationCanceller(canceller: ConversationCanceller): ConversationFactory;
	withInitialSessionData(initialSessionData: any): ConversationFactory;
	withEscapeSequence(escapeSequence: string): ConversationFactory;
	thatExcludesNonPlayersWithMessage(playerOnlyMessage: string): ConversationFactory;
	buildConversation(forWhom: Conversable): Conversation;
	withFirstPrompt(firstPrompt: Prompt): ConversationFactory;
	withLocalEcho(localEchoEnabled: boolean): ConversationFactory;
	withModality(modal: boolean): ConversationFactory;
	withPrefix(prefix: ConversationPrefix): ConversationFactory;
	withTimeout(timeoutSeconds: number): ConversationFactory;
}

export default class ConversationFactory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ConversationFactory');
	}
	constructor(plugin: Plugin);
	constructor(...args: any[]) {
		return new ConversationFactory.$javaClass(...args);
	}
}

