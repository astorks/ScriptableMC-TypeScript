import Messenger from '../../../../org/bukkit/plugin/messaging/Messenger.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import Plugin from '../../../../org/bukkit/plugin/Plugin.js';
import PluginMessageListener from '../../../../org/bukkit/plugin/messaging/PluginMessageListener.js';
import PluginMessageListenerRegistration from '../../../../org/bukkit/plugin/messaging/PluginMessageListenerRegistration.js';
export default interface StandardMessenger extends Messenger {
    registerIncomingPluginChannel(plugin: Plugin, channel: string, listener: PluginMessageListener): PluginMessageListenerRegistration;
    unregisterIncomingPluginChannel(plugin: Plugin, channel: string, listener: PluginMessageListener): void;
    unregisterIncomingPluginChannel(plugin: Plugin, channel: string): void;
    unregisterIncomingPluginChannel(plugin: Plugin): void;
    registerOutgoingPluginChannel(plugin: Plugin, channel: string): void;
    unregisterOutgoingPluginChannel(plugin: Plugin, channel: string): void;
    unregisterOutgoingPluginChannel(plugin: Plugin): void;
    isRegistrationValid(registration: PluginMessageListenerRegistration): boolean;
    getOutgoingChannels(): any;
    getOutgoingChannels(plugin: Plugin): any;
    getIncomingChannels(plugin: Plugin): any;
    getIncomingChannels(): any;
    getIncomingChannelRegistrations(plugin: Plugin): any;
    getIncomingChannelRegistrations(channel: string): any;
    getIncomingChannelRegistrations(plugin: Plugin, channel: string): any;
    isIncomingChannelRegistered(plugin: Plugin, channel: string): boolean;
    isOutgoingChannelRegistered(plugin: Plugin, channel: string): boolean;
    dispatchIncomingMessage(source: Player, channel: string, message: Array<number>): void;
    isReservedChannel(channel: string): boolean;
}
export default class StandardMessenger {
    static get $javaClass(): any;
    constructor();
    static get MAX_MESSAGE_SIZE(): number;
    static get MAX_CHANNEL_SIZE(): number;
    static validateAndCorrectChannel(channel: string): string;
    static validateChannel(channel: string): void;
    static validatePluginMessage(messenger: Messenger, source: Plugin, channel: string, message: Array<number>): void;
}
