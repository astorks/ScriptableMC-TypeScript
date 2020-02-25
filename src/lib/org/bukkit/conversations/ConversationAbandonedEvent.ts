declare var Java: any;
import Conversation from '../../../org/bukkit/conversations/Conversation.js'
import ConversationCanceller from '../../../org/bukkit/conversations/ConversationCanceller.js'
import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js'

export default interface ConversationAbandonedEvent {
	getCanceller(): ConversationCanceller;
	getContext(): ConversationContext;
	getSource(): any;
	gracefulExit(): boolean;
}

export default class ConversationAbandonedEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ConversationAbandonedEvent');
	}

	constructor(conversation: Conversation);
	constructor(conversation: Conversation, canceller: ConversationCanceller);
	constructor(...args: any[]) {
		return new ConversationAbandonedEvent.$javaClass(...args);
	}

}

