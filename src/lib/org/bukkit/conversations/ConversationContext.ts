declare var Java: any;
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Conversable} from '../../../org/bukkit/conversations/Conversable.js'

export interface ConversationContext {
	getPlugin(): Plugin;
	getForWhom(): Conversable;
	getAllSessionData(): any;
	setSessionData(key: any, value: any): void;
	getSessionData(key: any): any;
}

export class ConversationContext {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ConversationContext');
	}
	constructor(plugin: Plugin, forWhom: Conversable, initialSessionData: any);
	constructor(...args: any[]) {
		return new ConversationContext.$javaClass(...args);
	}
}

