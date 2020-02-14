declare var Java: any;
import Conversable from '../../../org/bukkit/conversations/Conversable.js'
import Conversation$ConversationState from '../../../org/bukkit/conversations/Conversation$ConversationState.js'
import ConversationAbandonedEvent from '../../../org/bukkit/conversations/ConversationAbandonedEvent.js'
import ConversationAbandonedListener from '../../../org/bukkit/conversations/ConversationAbandonedListener.js'
import ConversationCanceller from '../../../org/bukkit/conversations/ConversationCanceller.js'
import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js'
import ConversationPrefix from '../../../org/bukkit/conversations/ConversationPrefix.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import Prompt from '../../../org/bukkit/conversations/Prompt.js'

export default interface Conversation {
	abandon(): void;
	abandon(details: ConversationAbandonedEvent): void;
	acceptInput(input: string): void;
	addConversationAbandonedListener(listener: ConversationAbandonedListener): void;
	begin(): void;
	getCancellers(): Array<ConversationCanceller>;
	getContext(): ConversationContext;
	getForWhom(): Conversable;
	getPrefix(): ConversationPrefix;
	getState(): Conversation$ConversationState;
	isLocalEchoEnabled(): boolean;
	isModal(): boolean;
	outputNextPrompt(): void;
	removeConversationAbandonedListener(listener: ConversationAbandonedListener): void;
	setLocalEchoEnabled(localEchoEnabled: boolean): void;
}

export default class Conversation {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.Conversation');
	}

	constructor(plugin: Plugin, forWhom: Conversable, firstPrompt: Prompt);
	constructor(plugin: Plugin, forWhom: Conversable, firstPrompt: Prompt, initialSessionData: any);
	constructor(...args: any[]) {
		return new Conversation.$javaClass(...args);
	}

}

