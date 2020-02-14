declare var Java: any;
import Conversable from '../../../org/bukkit/conversations/Conversable.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface ConversationContext {
	getAllSessionData(): any;
	getForWhom(): Conversable;
	getPlugin(): Plugin;
	getSessionData(key: any): any;
	setSessionData(key: any, value: any): void;
}

export default class ConversationContext {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ConversationContext');
	}

	constructor(plugin: Plugin, forWhom: Conversable, initialSessionData: any);
	constructor(...args: any[]) {
		return new ConversationContext.$javaClass(...args);
	}

}

