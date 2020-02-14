declare var Java: any;
import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js'
import Prompt from '../../../org/bukkit/conversations/Prompt.js'
import ValidatingPrompt from '../../../org/bukkit/conversations/ValidatingPrompt.js'

export default interface NumericPrompt extends ValidatingPrompt {
	acceptInput(context: ConversationContext, input: string): Prompt;
	blocksForInput(context: ConversationContext): boolean;
	getPromptText(arg0: ConversationContext): string;
}

export default class NumericPrompt {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.NumericPrompt');
	}

	constructor();
	constructor(...args: any[]) {
		return new NumericPrompt.$javaClass(...args);
	}

	public static get END_OF_CONVERSATION(): Prompt {
		return NumericPrompt.$javaClass.END_OF_CONVERSATION;
	}

}

