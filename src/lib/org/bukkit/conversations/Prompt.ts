declare var Java: any;
import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js'

export default interface Prompt {
	acceptInput(arg0: ConversationContext, arg1: string): Prompt;
	blocksForInput(arg0: ConversationContext): boolean;
	getPromptText(arg0: ConversationContext): string;
}

export default class Prompt {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.Prompt');
	}

	public static get END_OF_CONVERSATION(): Prompt {
		return Prompt.$javaClass.END_OF_CONVERSATION;
	}

}

