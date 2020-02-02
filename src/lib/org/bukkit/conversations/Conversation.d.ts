import Conversable from '../../../org/bukkit/conversations/Conversable.js';
import Conversation$ConversationState from '../../../org/bukkit/conversations/Conversation$ConversationState.js';
import ConversationAbandonedEvent from '../../../org/bukkit/conversations/ConversationAbandonedEvent.js';
import ConversationAbandonedListener from '../../../org/bukkit/conversations/ConversationAbandonedListener.js';
import ConversationCanceller from '../../../org/bukkit/conversations/ConversationCanceller.js';
import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js';
import ConversationPrefix from '../../../org/bukkit/conversations/ConversationPrefix.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import Prompt from '../../../org/bukkit/conversations/Prompt.js';
export default interface Conversation {
    getPrefix(): ConversationPrefix;
    getForWhom(): Conversable;
    isModal(): boolean;
    isLocalEchoEnabled(): boolean;
    setLocalEchoEnabled(localEchoEnabled: boolean): void;
    getCancellers(): Array<ConversationCanceller>;
    begin(): void;
    acceptInput(input: string): void;
    abandon(details: ConversationAbandonedEvent): void;
    abandon(): void;
    outputNextPrompt(): void;
    addConversationAbandonedListener(listener: ConversationAbandonedListener): void;
    removeConversationAbandonedListener(listener: ConversationAbandonedListener): void;
    getContext(): ConversationContext;
    getState(): Conversation$ConversationState;
}
export default class Conversation {
    static get $javaClass(): any;
    constructor(plugin: Plugin, forWhom: Conversable, firstPrompt: Prompt, initialSessionData: any);
    constructor(plugin: Plugin, forWhom: Conversable, firstPrompt: Prompt);
}
