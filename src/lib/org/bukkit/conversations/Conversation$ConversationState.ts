declare var Java: any;

export default interface Conversation$ConversationState {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Conversation$ConversationState {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.Conversation$ConversationState');
	}

	public static get ABANDONED(): Conversation$ConversationState {
		return this.$javaClass.ABANDONED;
	}
	public static get STARTED(): Conversation$ConversationState {
		return this.$javaClass.STARTED;
	}
	public static get UNSTARTED(): Conversation$ConversationState {
		return this.$javaClass.UNSTARTED;
	}
}

