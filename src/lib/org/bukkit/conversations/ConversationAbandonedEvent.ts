declare var Java: any;
import Conversation from './Conversation.js'
import ConversationCanceller from './ConversationCanceller.js'
import ConversationContext from './ConversationContext.js'

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

