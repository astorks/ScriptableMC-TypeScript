declare var Java: any;
import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js'
import ConversationPrefix from '../../../org/bukkit/conversations/ConversationPrefix.js'

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

