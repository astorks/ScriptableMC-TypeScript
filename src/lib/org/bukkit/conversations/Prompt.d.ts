import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js';
export default interface Prompt {
    getPromptText(arg0: ConversationContext): string;
    blocksForInput(arg0: ConversationContext): boolean;
    acceptInput(arg0: ConversationContext, arg1: string): Prompt;
}
export default class Prompt {
    static get $javaClass(): any;
    static get END_OF_CONVERSATION(): Prompt;
}