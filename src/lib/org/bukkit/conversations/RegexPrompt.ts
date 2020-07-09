declare var Java: any;
import ConversationContext from './ConversationContext.js'
import Prompt from './Prompt.js'
import ValidatingPrompt from './ValidatingPrompt.js'

export default interface RegexPrompt extends ValidatingPrompt {
	acceptInput(context: ConversationContext, input: string): Prompt;
	blocksForInput(context: ConversationContext): boolean;
	getPromptText(arg0: ConversationContext): string;
}

export default class RegexPrompt {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.RegexPrompt');
	}

	constructor(regex: string);
	constructor(pattern: any);
	constructor(...args: any[]) {
		return new RegexPrompt.$javaClass(...args);
	}

	public static get END_OF_CONVERSATION(): Prompt {
		return RegexPrompt.$javaClass.END_OF_CONVERSATION;
	}

}

