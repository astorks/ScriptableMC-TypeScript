declare var Java: any;
import ChatColor from '../../../org/bukkit/ChatColor.js'
import ConversationContext from '../../../org/bukkit/conversations/ConversationContext.js'
import ConversationPrefix from '../../../org/bukkit/conversations/ConversationPrefix.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface PluginNameConversationPrefix extends ConversationPrefix {
	getPrefix(context: ConversationContext): string;
}

export default class PluginNameConversationPrefix {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.PluginNameConversationPrefix');
	}

	constructor(plugin: Plugin);
	constructor(plugin: Plugin, separator: string, prefixColor: ChatColor);
	constructor(...args: any[]) {
		return new PluginNameConversationPrefix.$javaClass(...args);
	}

}

