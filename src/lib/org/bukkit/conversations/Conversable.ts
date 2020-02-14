declare var Java: any;
import Conversation from '../../../org/bukkit/conversations/Conversation.js'
import ConversationAbandonedEvent from '../../../org/bukkit/conversations/ConversationAbandonedEvent.js'

export default interface Conversable {
	sendRawMessage(arg0: string): void;
	acceptConversationInput(arg0: string): void;
	beginConversation(arg0: Conversation): boolean;
	abandonConversation(arg0: Conversation, arg1: ConversationAbandonedEvent): void;
	abandonConversation(arg0: Conversation): void;
	isConversing(): boolean;
}

export default class Conversable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.Conversable');
	}
}

