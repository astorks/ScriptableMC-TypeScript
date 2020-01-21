declare var Java: any;
import {ConversationContext} from '../../../org/bukkit/conversations/ConversationContext.js'
import {Conversation$ConversationState} from '../../../org/bukkit/conversations/Conversation$ConversationState.js'
import {ConversationPrefix} from '../../../org/bukkit/conversations/ConversationPrefix.js'
import {ConversationAbandonedListener} from '../../../org/bukkit/conversations/ConversationAbandonedListener.js'
import {Conversable} from '../../../org/bukkit/conversations/Conversable.js'
import {ConversationAbandonedEvent} from '../../../org/bukkit/conversations/ConversationAbandonedEvent.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Prompt} from '../../../org/bukkit/conversations/Prompt.js'

export interface Conversation {
	begin(): void;
	getContext(): ConversationContext;
	getState(): Conversation$ConversationState;
	getPrefix(): ConversationPrefix;
	removeConversationAbandonedListener(listener: ConversationAbandonedListener): void;
	addConversationAbandonedListener(listener: ConversationAbandonedListener): void;
	setLocalEchoEnabled(localEchoEnabled: boolean): void;
	isLocalEchoEnabled(): boolean;
	getForWhom(): Conversable;
	getCancellers(): any;
	isModal(): boolean;
	acceptInput(input: string): void;
	abandon(): void;
	abandon(details: ConversationAbandonedEvent): void;
	outputNextPrompt(): void;
}

export class Conversation {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.Conversation');
	}
	constructor(plugin: Plugin, forWhom: Conversable, firstPrompt: Prompt);
	constructor(plugin: Plugin, forWhom: Conversable, firstPrompt: Prompt, initialSessionData: any);
	constructor(...args: any[]) {
		return new Conversation.$javaClass(...args);
	}
}

