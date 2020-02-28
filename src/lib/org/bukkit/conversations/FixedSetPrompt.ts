declare var Java: any;
import ConversationContext from './ConversationContext.js'
import Prompt from './Prompt.js'
import ValidatingPrompt from './ValidatingPrompt.js'

export default interface FixedSetPrompt extends ValidatingPrompt {
	acceptInput(context: ConversationContext, input: string): Prompt;
	blocksForInput(context: ConversationContext): boolean;
	getPromptText(arg0: ConversationContext): string;
}

export default class FixedSetPrompt {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.FixedSetPrompt');
	}

	constructor(fixedSet: Array<string>);
	constructor(...args: any[]) {
		return new FixedSetPrompt.$javaClass(...args);
	}

	public static get END_OF_CONVERSATION(): Prompt {
		return FixedSetPrompt.$javaClass.END_OF_CONVERSATION;
	}

}

