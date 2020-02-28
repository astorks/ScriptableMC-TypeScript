declare var Java: any;
import Conversable from './Conversable.js'
import Conversation$ConversationState from './Conversation$ConversationState.js'
import ConversationAbandonedEvent from './ConversationAbandonedEvent.js'
import ConversationAbandonedListener from './ConversationAbandonedListener.js'
import ConversationCanceller from './ConversationCanceller.js'
import ConversationContext from './ConversationContext.js'
import ConversationPrefix from './ConversationPrefix.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import Prompt from './Prompt.js'

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

