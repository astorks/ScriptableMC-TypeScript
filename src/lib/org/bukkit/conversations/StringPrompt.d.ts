import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js';
import Prompt from '../../../org/bukkit/conversations/Prompt.js';
export default interface StringPrompt extends Prompt {
    blocksForInput(context: ConversationContext): boolean;
    getPromptText(arg0: ConversationContext): string;
    acceptInput(arg0: ConversationContext, arg1: string): Prompt;
}
export default class StringPrompt {
    static get $javaClass(): any;
    constructor();
    static get END_OF_CONVERSATION(): Prompt;
}
