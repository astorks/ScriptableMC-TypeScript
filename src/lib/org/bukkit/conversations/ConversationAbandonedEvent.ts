declare var Java: any;
import {ConversationCanceller} from '../../../org/bukkit/conversations/ConversationCanceller.js'
import {ConversationContext} from '../../../org/bukkit/conversations/ConversationContext.js'
import {Conversation} from '../../../org/bukkit/conversations/Conversation.js'

export interface ConversationAbandonedEvent {
	getCanceller(): ConversationCanceller;
	gracefulExit(): boolean;
	getContext(): ConversationContext;
	getSource(): any;
}

export class ConversationAbandonedEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ConversationAbandonedEvent');
	}
	constructor(conversation: Conversation, canceller: ConversationCanceller);
	constructor(conversation: Conversation);
	constructor(...args: any[]) {
		return new ConversationAbandonedEvent.$javaClass(...args);
	}
}

