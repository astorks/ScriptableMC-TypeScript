declare var Java: any;
import {Server} from '../../../org/bukkit/Server.js'
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {PermissionAttachment} from '../../../org/bukkit/permissions/PermissionAttachment.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Conversation} from '../../../org/bukkit/conversations/Conversation.js'
import {ConversationAbandonedEvent} from '../../../org/bukkit/conversations/ConversationAbandonedEvent.js'
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {Conversable} from '../../../org/bukkit/conversations/Conversable.js'

export interface ConsoleCommandSender extends CommandSender, Conversable {
	getName(): string;
	getServer(): Server;
	sendMessage(messages: Array<string>): void;
	sendMessage(message: string): void;
	hasPermission(_name: string): boolean;
	hasPermission(perm: Permission): boolean;
	recalculatePermissions(): void;
	getEffectivePermissions(): any;
	removeAttachment(attachment: PermissionAttachment): void;
	addAttachment(plugin: Plugin, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean): PermissionAttachment;
	isPermissionSet(_name: string): boolean;
	isPermissionSet(perm: Permission): boolean;
	isOp(): boolean;
	setOp(value: boolean): void;
	abandonConversation(conversation: Conversation, details: ConversationAbandonedEvent): void;
	abandonConversation(conversation: Conversation): void;
	acceptConversationInput(input: string): void;
	beginConversation(conversation: Conversation): boolean;
	sendRawMessage(message: string): void;
	isConversing(): boolean;
}

export class ConsoleCommandSender {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.ConsoleCommandSender');
	}
}

