declare var Java: any;
import Conversation from '../../../org/bukkit/conversations/Conversation.js'
import ConversationAbandonedEvent from '../../../org/bukkit/conversations/ConversationAbandonedEvent.js'

export default interface Conversable {
	abandonConversation(arg0: Conversation): void;
	abandonConversation(arg0: Conversation, arg1: ConversationAbandonedEvent): void;
	acceptConversationInput(arg0: string): void;
	beginConversation(arg0: Conversation): boolean;
	isConversing(): boolean;
	sendRawMessage(arg0: string): void;
}

export default class Conversable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.Conversable');
	}

}

