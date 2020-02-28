declare var Java: any;
import ConversationContext from './ConversationContext.js'
import Prompt from './Prompt.js'
import ValidatingPrompt from './ValidatingPrompt.js'

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

