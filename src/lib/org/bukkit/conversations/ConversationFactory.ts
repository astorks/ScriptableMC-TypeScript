declare var Java: any;
import Conversable from './Conversable.js'
import Conversation from './Conversation.js'
import ConversationAbandonedListener from './ConversationAbandonedListener.js'
import ConversationCanceller from './ConversationCanceller.js'
import ConversationPrefix from './ConversationPrefix.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import Prompt from './Prompt.js'

export default interface ConversationFactory {
	addConversationAbandonedListener(listener: ConversationAbandonedListener): ConversationFactory;
	buildConversation(forWhom: Conversable): Conversation;
	thatExcludesNonPlayersWithMessage(playerOnlyMessage: string): ConversationFactory;
	withConversationCanceller(canceller: ConversationCanceller): ConversationFactory;
	withEscapeSequence(escapeSequence: string): ConversationFactory;
	withFirstPrompt(firstPrompt: Prompt): ConversationFactory;
	withInitialSessionData(initialSessionData: any): ConversationFactory;
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

