declare var Java: any;
import {ConversationContext} from '../../../org/bukkit/conversations/ConversationContext.js'

export interface Prompt {
	acceptInput(arg0: ConversationContext, arg1: string): Prompt;
	getPromptText(arg0: ConversationContext): string;
	blocksForInput(arg0: ConversationContext): boolean;
}

export class Prompt {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.Prompt');
	}
	public static get END_OF_CONVERSATION(): Prompt {
		return Prompt.$javaClass.END_OF_CONVERSATION;
	}
}

