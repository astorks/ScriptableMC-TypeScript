declare var Java: any;
import {Conversation} from '../../../org/bukkit/conversations/Conversation.js'
import {ConversationContext} from '../../../org/bukkit/conversations/ConversationContext.js'

export interface ConversationCanceller {
	setConversation(arg0: Conversation): void;
	cancelBasedOnInput(arg0: ConversationContext, arg1: string): boolean;
	clone(): any;
	clone(): ConversationCanceller;
}

export class ConversationCanceller {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ConversationCanceller');
	}
}

