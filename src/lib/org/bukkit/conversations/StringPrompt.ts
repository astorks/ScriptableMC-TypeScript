declare var Java: any;
import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js'
import Prompt from '../../../org/bukkit/conversations/Prompt.js'

export default interface StringPrompt extends Prompt {
	acceptInput(arg0: ConversationContext, arg1: string): Prompt;
	blocksForInput(context: ConversationContext): boolean;
	getPromptText(arg0: ConversationContext): string;
}

export default class StringPrompt {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.StringPrompt');
	}

	constructor();
	constructor(...args: any[]) {
		return new StringPrompt.$javaClass(...args);
	}

	public static get END_OF_CONVERSATION(): Prompt {
		return StringPrompt.$javaClass.END_OF_CONVERSATION;
	}

}

