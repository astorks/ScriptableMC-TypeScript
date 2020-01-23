declare var Java: any;
import {Plugin} from '../../../../org/bukkit/plugin/Plugin.js'
import {PluginMessageListener} from '../../../../org/bukkit/plugin/messaging/PluginMessageListener.js'
import {PluginMessageListenerRegistration} from '../../../../org/bukkit/plugin/messaging/PluginMessageListenerRegistration.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'

export interface Messenger {
	unregisterIncomingPluginChannel(plugin: Plugin): void;
	unregisterIncomingPluginChannel(plugin: Plugin, channel: string): void;
	unregisterIncomingPluginChannel(plugin: Plugin, channel: string, listener: PluginMessageListener): void;
	unregisterOutgoingPluginChannel(plugin: Plugin): void;
	unregisterOutgoingPluginChannel(plugin: Plugin, channel: string): void;
	registerIncomingPluginChannel(plugin: Plugin, channel: string, listener: PluginMessageListener): PluginMessageListenerRegistration;
	registerOutgoingPluginChannel(plugin: Plugin, channel: string): void;
	isRegistrationValid(registration: PluginMessageListenerRegistration): boolean;
	getOutgoingChannels(plugin: Plugin): any;
	getOutgoingChannels(): any;
	isOutgoingChannelRegistered(plugin: Plugin, channel: string): boolean;
	dispatchIncomingMessage(source: Player, channel: string, message: Array<number>): void;
	getIncomingChannelRegistrations(plugin: Plugin, channel: string): any;
	getIncomingChannelRegistrations(channel: string): any;
	getIncomingChannelRegistrations(plugin: Plugin): any;
	isIncomingChannelRegistered(plugin: Plugin, channel: string): boolean;
	getIncomingChannels(): any;
	getIncomingChannels(plugin: Plugin): any;
	isReservedChannel(channel: string): boolean;
}

export class Messenger {
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

