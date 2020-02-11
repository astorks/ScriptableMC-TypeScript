import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js';
import Prompt from '../../../org/bukkit/conversations/Prompt.js';
import ValidatingPrompt from '../../../org/bukkit/conversations/ValidatingPrompt.js';
export default interface RegexPrompt extends ValidatingPrompt {
    blocksForInput(context: ConversationContext): boolean;
    acceptInput(context: ConversationContext, input: string): Prompt;
    getPromptText(arg0: ConversationContext): string;
}
export default class RegexPrompt {
    static get $javaClass(): any;
    constructor(pattern: any);
    constructor(regex: string);
    static get END_OF_CONVERSATION(): Prompt;
}
