declare var Java: any;
import Conversation from './Conversation.js'
import ConversationCanceller from './ConversationCanceller.js'
import ConversationContext from './ConversationContext.js'

export default interface ExactMatchConversationCanceller extends ConversationCanceller {
	cancelBasedOnInput(context: ConversationContext, input: string): boolean;
	clone(): ConversationCanceller;
	clone(): any;
	setConversation(conversation: Conversation): void;
}

export default class ExactMatchConversationCanceller {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ExactMatchConversationCanceller');
	}

	constructor(escapeSequence: string);
	constructor(...args: any[]) {
		return new ExactMatchConversationCanceller.$javaClass(...args);
	}

}

