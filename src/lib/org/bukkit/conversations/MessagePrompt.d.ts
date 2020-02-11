import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js';
import Prompt from '../../../org/bukkit/conversations/Prompt.js';
export default interface MessagePrompt extends Prompt {
    blocksForInput(context: ConversationContext): boolean;
    acceptInput(context: ConversationContext, input: string): Prompt;
    getPromptText(arg0: ConversationContext): string;
}
export default class MessagePrompt {
    static get $javaClass(): any;
    constructor();
    static get END_OF_CONVERSATION(): Prompt;
}
