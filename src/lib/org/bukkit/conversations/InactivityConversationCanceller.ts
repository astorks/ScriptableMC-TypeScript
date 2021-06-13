declare var Java: any;
import Conversation from './Conversation.js'
import ConversationCanceller from './ConversationCanceller.js'
import ConversationContext from './ConversationContext.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface InactivityConversationCanceller extends ConversationCanceller {
	cancelBasedOnInput(context: ConversationContext, input: string): boolean;
	clone(): any;
	clone(): ConversationCanceller;
	setConversation(conversation: Conversation): void;
}

export default class InactivityConversationCanceller {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.InactivityConversationCanceller');
	}

	constructor(plugin: Plugin, timeoutSeconds: number);
	constructor(...args: any[]) {
		return new InactivityConversationCanceller.$javaClass(...args);
	}

}

