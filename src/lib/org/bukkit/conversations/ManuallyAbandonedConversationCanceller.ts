declare var Java: any;
import Conversation from '../../../org/bukkit/conversations/Conversation.js'
import ConversationCanceller from '../../../org/bukkit/conversations/ConversationCanceller.js'
import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js'

export default interface ManuallyAbandonedConversationCanceller extends ConversationCanceller {
	cancelBasedOnInput(context: ConversationContext, input: string): boolean;
	clone(): ConversationCanceller;
	clone(): any;
	setConversation(conversation: Conversation): void;
}

export default class ManuallyAbandonedConversationCanceller {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ManuallyAbandonedConversationCanceller');
	}

	constructor();
	constructor(...args: any[]) {
		return new ManuallyAbandonedConversationCanceller.$javaClass(...args);
	}

}

