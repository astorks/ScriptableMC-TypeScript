declare var Java: any;
import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js'
import Prompt from '../../../org/bukkit/conversations/Prompt.js'
import ValidatingPrompt from '../../../org/bukkit/conversations/ValidatingPrompt.js'

export default interface BooleanPrompt extends ValidatingPrompt {
	acceptInput(context: ConversationContext, input: string): Prompt;
	blocksForInput(context: ConversationContext): boolean;
	getPromptText(arg0: ConversationContext): string;
}

export default class BooleanPrompt {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.BooleanPrompt');
	}

	constructor();
	constructor(...args: any[]) {
		return new BooleanPrompt.$javaClass(...args);
	}

	public static get END_OF_CONVERSATION(): Prompt {
		return BooleanPrompt.$javaClass.END_OF_CONVERSATION;
	}

}

