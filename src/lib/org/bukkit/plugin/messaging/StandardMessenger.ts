declare var Java: any;
import Messenger from '../../../../org/bukkit/plugin/messaging/Messenger.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import Plugin from '../../../../org/bukkit/plugin/Plugin.js'
import PluginMessageListener from '../../../../org/bukkit/plugin/messaging/PluginMessageListener.js'
import PluginMessageListenerRegistration from '../../../../org/bukkit/plugin/messaging/PluginMessageListenerRegistration.js'

export default interface StandardMessenger extends Messenger {
	dispatchIncomingMessage(source: Player, channel: string, message: Array<number>): void;
	getIncomingChannelRegistrations(plugin: Plugin): any;
	getIncomingChannelRegistrations(channel: string): any;
	getIncomingChannelRegistrations(plugin: Plugin, channel: string): any;
	getIncomingChannels(): any;
	getIncomingChannels(plugin: Plugin): any;
	getOutgoingChannels(): any;
	getOutgoingChannels(plugin: Plugin): any;
	isIncomingChannelRegistered(plugin: Plugin, channel: string): boolean;
	isOutgoingChannelRegistered(plugin: Plugin, channel: string): boolean;
	isRegistrationValid(registration: PluginMessageListenerRegistration): boolean;
	isReservedChannel(channel: string): boolean;
	registerIncomingPluginChannel(plugin: Plugin, channel: string, listener: PluginMessageListener): PluginMessageListenerRegistration;
	registerOutgoingPluginChannel(plugin: Plugin, channel: string): void;
	unregisterIncomingPluginChannel(plugin: Plugin): void;
	unregisterIncomingPluginChannel(plugin: Plugin, channel: string): void;
	unregisterIncomingPluginChannel(plugin: Plugin, channel: string, listener: PluginMessageListener): void;
	unregisterOutgoingPluginChannel(plugin: Plugin): void;
	unregisterOutgoingPluginChannel(plugin: Plugin, channel: string): void;
}

export default class StandardMessenger {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.messaging.StandardMessenger');
	}

	constructor();
	constructor(...args: any[]) {
		return new StandardMessenger.$javaClass(...args);
	}

	public static get MAX_CHANNEL_SIZE(): number {
		return StandardMessenger.$javaClass.MAX_CHANNEL_SIZE;
	}

	public static get MAX_MESSAGE_SIZE(): number {
		return StandardMessenger.$javaClass.MAX_MESSAGE_SIZE;
	}

	public static validateAndCorrectChannel(channel: string): string;
	public static validateAndCorrectChannel(...args: any[]): any {
		return StandardMessenger.$javaClass.validateAndCorrectChannel(...args);
	}

	public static validateChannel(channel: string): void;
	public static validateChannel(...args: any[]): any {
		return StandardMessenger.$javaClass.validateChannel(...args);
	}

	public static validatePluginMessage(messenger: Messenger, source: Plugin, channel: string, message: Array<number>): void;
	public static validatePluginMessage(...args: any[]): any {
		return StandardMessenger.$javaClass.validatePluginMessage(...args);
	}

}

