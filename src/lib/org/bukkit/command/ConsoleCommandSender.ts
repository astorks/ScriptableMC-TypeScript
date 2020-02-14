declare var Java: any;
import CommandSender from '../../../org/bukkit/command/CommandSender.js'
import Conversable from '../../../org/bukkit/conversations/Conversable.js'
import Conversation from '../../../org/bukkit/conversations/Conversation.js'
import ConversationAbandonedEvent from '../../../org/bukkit/conversations/ConversationAbandonedEvent.js'
import Permission from '../../../org/bukkit/permissions/Permission.js'
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import Server from '../../../org/bukkit/Server.js'

export default interface ConsoleCommandSender extends CommandSender, Conversable {
	abandonConversation(arg0: Conversation): void;
	abandonConversation(arg0: Conversation, arg1: ConversationAbandonedEvent): void;
	acceptConversationInput(arg0: string): void;
	addAttachment(arg0: Plugin): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
	beginConversation(arg0: Conversation): boolean;
	getEffectivePermissions(): any;
	getName(): string;
	getServer(): Server;
	hasPermission(arg0: string): boolean;
	hasPermission(arg0: Permission): boolean;
	isConversing(): boolean;
	isOp(): boolean;
	isPermissionSet(arg0: string): boolean;
	isPermissionSet(arg0: Permission): boolean;
	recalculatePermissions(): void;
	removeAttachment(arg0: PermissionAttachment): void;
	sendMessage(arg0: Array<string>): void;
	sendMessage(arg0: string): void;
	sendRawMessage(arg0: string): void;
	setOp(arg0: boolean): void;
}

export default class ConsoleCommandSender {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.ConsoleCommandSender');
	}

}

