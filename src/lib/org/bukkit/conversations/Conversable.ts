declare var Java: any;
import {Conversation} from '../../../org/bukkit/conversations/Conversation.js'
import {ConversationAbandonedEvent} from '../../../org/bukkit/conversations/ConversationAbandonedEvent.js'

export interface Conversable {
	abandonConversation(conversation: Conversation, details: ConversationAbandonedEvent): void;
	abandonConversation(conversation: Conversation): void;
	acceptConversationInput(input: string): void;
	sendRawMessage(message: string): void;
	isConversing(): boolean;
	beginConversation(conversation: Conversation): boolean;
}

export class Conversable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.Conversable');
	}
}

