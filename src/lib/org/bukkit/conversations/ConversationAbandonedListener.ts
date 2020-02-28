declare var Java: any;
import ConversationAbandonedEvent from './ConversationAbandonedEvent.js'

export default interface ConversationAbandonedListener {
	conversationAbandoned(arg0: ConversationAbandonedEvent): void;
}

export default class ConversationAbandonedListener {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ConversationAbandonedListener');
	}

}

