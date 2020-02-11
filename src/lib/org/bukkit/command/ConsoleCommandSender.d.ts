import CommandSender from '../../../org/bukkit/command/CommandSender.js';
import Conversable from '../../../org/bukkit/conversations/Conversable.js';
import Conversation from '../../../org/bukkit/conversations/Conversation.js';
import ConversationAbandonedEvent from '../../../org/bukkit/conversations/ConversationAbandonedEvent.js';
import Permission from '../../../org/bukkit/permissions/Permission.js';
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import Server from '../../../org/bukkit/Server.js';
export default interface ConsoleCommandSender extends CommandSender, Conversable {
    getName(): string;
    getServer(): Server;
    sendMessage(arg0: Array<string>): void;
    sendMessage(arg0: string): void;
    getEffectivePermissions(): any;
    recalculatePermissions(): void;
    hasPermission(arg0: Permission): boolean;
    hasPermission(arg0: string): boolean;
    removeAttachment(arg0: PermissionAttachment): void;
    addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
    addAttachment(arg0: Plugin): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
    isPermissionSet(arg0: string): boolean;
    isPermissionSet(arg0: Permission): boolean;
    isOp(): boolean;
    setOp(arg0: boolean): void;
    sendRawMessage(arg0: string): void;
    acceptConversationInput(arg0: string): void;
    abandonConversation(arg0: Conversation): void;
    abandonConversation(arg0: Conversation, arg1: ConversationAbandonedEvent): void;
    isConversing(): boolean;
    beginConversation(arg0: Conversation): boolean;
}
export default class ConsoleCommandSender {
    static get $javaClass(): any;
}
