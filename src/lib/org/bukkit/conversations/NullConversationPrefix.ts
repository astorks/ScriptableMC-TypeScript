declare var Java: any;
import ConversationContext from './ConversationContext.js'
import ConversationPrefix from './ConversationPrefix.js'

export default interface NullConversationPrefix extends ConversationPrefix {
	getPrefix(context: ConversationContext): string;
}

export default class NullConversationPrefix {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.NullConversationPrefix');
	}

	constructor();
	constructor(...args: any[]) {
		return new NullConversationPrefix.$javaClass(...args);
	}

}

