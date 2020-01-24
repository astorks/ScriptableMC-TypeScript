declare var Java: any;
import {ConversationContext} from '../../../org/bukkit/conversations/ConversationContext.js'
import {Conversation} from '../../../org/bukkit/conversations/Conversation.js'

export interface ConversationCanceller {
	clone(): any;
	clone(): ConversationCanceller;
	cancelBasedOnInput(context: ConversationContext, input: string): boolean;
	setConversation(conversation: Conversation): void;
}

export class ConversationCanceller {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ConversationCanceller');
	}
}

