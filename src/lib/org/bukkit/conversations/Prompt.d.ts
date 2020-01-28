import { ConversationContext } from '../../../org/bukkit/conversations/ConversationContext.js';
export interface Prompt {
    acceptInput(arg0: ConversationContext, arg1: string): Prompt;
    getPromptText(arg0: ConversationContext): string;
    blocksForInput(arg0: ConversationContext): boolean;
}
export declare class Prompt {
    static get $javaClass(): any;
    static get END_OF_CONVERSATION(): Prompt;
}
