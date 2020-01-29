import { ConversationContext } from '../../../org/bukkit/conversations/ConversationContext.js';
import { Conversation$ConversationState } from '../../../org/bukkit/conversations/Conversation$ConversationState.js';
import { ConversationPrefix } from '../../../org/bukkit/conversations/ConversationPrefix.js';
import { ConversationAbandonedListener } from '../../../org/bukkit/conversations/ConversationAbandonedListener.js';
import { Conversable } from '../../../org/bukkit/conversations/Conversable.js';
import { ConversationAbandonedEvent } from '../../../org/bukkit/conversations/ConversationAbandonedEvent.js';
import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
import { Prompt } from '../../../org/bukkit/conversations/Prompt.js';
export interface Conversation {
    begin(): void;
    getContext(): ConversationContext;
    getState(): Conversation$ConversationState;
    getPrefix(): ConversationPrefix;
    removeConversationAbandonedListener(listener: ConversationAbandonedListener): void;
    setLocalEchoEnabled(localEchoEnabled: boolean): void;
    addConversationAbandonedListener(listener: ConversationAbandonedListener): void;
    getCancellers(): any;
    outputNextPrompt(): void;
    getForWhom(): Conversable;
    isModal(): boolean;
    acceptInput(input: string): void;
    isLocalEchoEnabled(): boolean;
    abandon(details: ConversationAbandonedEvent): void;
    abandon(): void;
}
export declare class Conversation {
    static get $javaClass(): any;
    constructor(plugin: Plugin, forWhom: Conversable, firstPrompt: Prompt);
    constructor(plugin: Plugin, forWhom: Conversable, firstPrompt: Prompt, initialSessionData: any);
}
