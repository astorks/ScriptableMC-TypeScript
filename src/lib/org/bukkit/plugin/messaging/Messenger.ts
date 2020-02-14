declare var Java: any;
import Player from '../../../../org/bukkit/entity/Player.js'
import Plugin from '../../../../org/bukkit/plugin/Plugin.js'
import PluginMessageListener from '../../../../org/bukkit/plugin/messaging/PluginMessageListener.js'
import PluginMessageListenerRegistration from '../../../../org/bukkit/plugin/messaging/PluginMessageListenerRegistration.js'

export default interface Messenger {
	unregisterIncomingPluginChannel(arg0: Plugin): void;
	unregisterIncomingPluginChannel(arg0: Plugin, arg1: string): void;
	unregisterIncomingPluginChannel(arg0: Plugin, arg1: string, arg2: PluginMessageListener): void;
	registerOutgoingPluginChannel(arg0: Plugin, arg1: string): void;
	unregisterOutgoingPluginChannel(arg0: Plugin): void;
	unregisterOutgoingPluginChannel(arg0: Plugin, arg1: string): void;
	registerIncomingPluginChannel(arg0: Plugin, arg1: string, arg2: PluginMessageListener): PluginMessageListenerRegistration;
	isReservedChannel(arg0: string): boolean;
	isRegistrationValid(arg0: PluginMessageListenerRegistration): boolean;
	getOutgoingChannels(arg0: Plugin): any;
	getOutgoingChannels(): any;
	getIncomingChannels(): any;
	getIncomingChannels(arg0: Plugin): any;
	getIncomingChannelRegistrations(arg0: Plugin, arg1: string): any;
	getIncomingChannelRegistrations(arg0: string): any;
	getIncomingChannelRegistrations(arg0: Plugin): any;
	isIncomingChannelRegistered(arg0: Plugin, arg1: string): boolean;
	isOutgoingChannelRegistered(arg0: Plugin, arg1: string): boolean;
	dispatchIncomingMessage(arg0: Player, arg1: string, arg2: Array<number>): void;
}

export default class Messenger {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.messaging.Messenger');
	}
	public static get MAX_MESSAGE_SIZE(): number {
		return Messenger.$javaClass.MAX_MESSAGE_SIZE;
	}
	public static get MAX_CHANNEL_SIZE(): number {
		return Messenger.$javaClass.MAX_CHANNEL_SIZE;
	}
}

