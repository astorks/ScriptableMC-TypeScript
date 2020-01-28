export interface Conversation$ConversationState {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class Conversation$ConversationState {
    static get $javaClass(): any;
    static get UNSTARTED(): Conversation$ConversationState;
    static get STARTED(): Conversation$ConversationState;
    static get ABANDONED(): Conversation$ConversationState;
}
