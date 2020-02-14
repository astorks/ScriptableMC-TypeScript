declare var Java: any;
import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js'
import Prompt from '../../../org/bukkit/conversations/Prompt.js'

export default interface MessagePrompt extends Prompt {
	acceptInput(context: ConversationContext, input: string): Prompt;
	blocksForInput(context: ConversationContext): boolean;
	getPromptText(arg0: ConversationContext): string;
}

export default class MessagePrompt {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.MessagePrompt');
	}

	constructor();
	constructor(...args: any[]) {
		return new MessagePrompt.$javaClass(...args);
	}

	public static get END_OF_CONVERSATION(): Prompt {
		return MessagePrompt.$javaClass.END_OF_CONVERSATION;
	}

}

