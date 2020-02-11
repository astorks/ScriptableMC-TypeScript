import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js';
import Prompt from '../../../org/bukkit/conversations/Prompt.js';
export default interface StringPrompt extends Prompt {
    blocksForInput(context: ConversationContext): boolean;
    acceptInput(arg0: ConversationContext, arg1: string): Prompt;
    getPromptText(arg0: ConversationContext): string;
}
export default class StringPrompt {
    static get $javaClass(): any;
    constructor();
    static get END_OF_CONVERSATION(): Prompt;
}
