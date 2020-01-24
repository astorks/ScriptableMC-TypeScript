declare var Java: any;
import {ConversationContext} from '../../../org/bukkit/conversations/ConversationContext.js'

export interface Prompt {
	acceptInput(context: ConversationContext, input: string): Prompt;
	getPromptText(context: ConversationContext): string;
	blocksForInput(context: ConversationContext): boolean;
}

export class Prompt {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.Prompt');
	}
	public static get END_OF_CONVERSATION(): Prompt {
		return Prompt.$javaClass.END_OF_CONVERSATION;
	}
}

