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
    begin(): void;
    getContext(): ConversationContext;
    getState(): Conversation$ConversationState;
    getPrefix(): ConversationPrefix;
    removeConversationAbandonedListener(listener: ConversationAbandonedListener): void;
    setLocalEchoEnabled(localEchoEnabled: boolean): void;
    addConversationAbandonedListener(listener: ConversationAbandonedListener): void;
    getCancellers(): Array<ConversationCanceller>;
    isModal(): boolean;
    abandon(): void;
    abandon(details: ConversationAbandonedEvent): void;
    isLocalEchoEnabled(): boolean;
    acceptInput(input: string): void;
    getForWhom(): Conversable;
    outputNextPrompt(): void;
}
export default class Conversation {
    static get $javaClass(): any;
    constructor(plugin: Plugin, forWhom: Conversable, firstPrompt: Prompt);
    constructor(plugin: Plugin, forWhom: Conversable, firstPrompt: Prompt, initialSessionData: any);
}
