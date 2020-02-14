declare var Java: any;
import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import Prompt from '../../../org/bukkit/conversations/Prompt.js'
import ValidatingPrompt from '../../../org/bukkit/conversations/ValidatingPrompt.js'

export default interface PlayerNamePrompt extends ValidatingPrompt {
	acceptInput(context: ConversationContext, input: string): Prompt;
	blocksForInput(context: ConversationContext): boolean;
	getPromptText(arg0: ConversationContext): string;
}

export default class PlayerNamePrompt {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.PlayerNamePrompt');
	}

	constructor(plugin: Plugin);
	constructor(...args: any[]) {
		return new PlayerNamePrompt.$javaClass(...args);
	}

	public static get END_OF_CONVERSATION(): Prompt {
		return PlayerNamePrompt.$javaClass.END_OF_CONVERSATION;
	}

}

