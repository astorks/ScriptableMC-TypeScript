declare var Java: any;

export default interface ChatMessageType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class ChatMessageType {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.ChatMessageType');
	}

	public static get ACTION_BAR(): ChatMessageType {
		return this.$javaClass.ACTION_BAR;
	}
	public static get CHAT(): ChatMessageType {
		return this.$javaClass.CHAT;
	}
	public static get SYSTEM(): ChatMessageType {
		return this.$javaClass.SYSTEM;
	}
	public static valueOf(_name: string): ChatMessageType;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return ChatMessageType.$javaClass.valueOf(...args);
	}

	public static values(): Array<ChatMessageType>;
	public static values(...args: any[]): any {
		return ChatMessageType.$javaClass.values(...args);
	}

}

