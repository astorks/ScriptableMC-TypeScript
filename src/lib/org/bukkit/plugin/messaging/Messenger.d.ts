import Player from '../../../../org/bukkit/entity/Player.js';
import Plugin from '../../../../org/bukkit/plugin/Plugin.js';
import PluginMessageListener from '../../../../org/bukkit/plugin/messaging/PluginMessageListener.js';
import PluginMessageListenerRegistration from '../../../../org/bukkit/plugin/messaging/PluginMessageListenerRegistration.js';
export default interface Messenger {
    unregisterOutgoingPluginChannel(arg0: Plugin, arg1: string): void;
    unregisterOutgoingPluginChannel(arg0: Plugin): void;
    registerOutgoingPluginChannel(arg0: Plugin, arg1: string): void;
    unregisterIncomingPluginChannel(arg0: Plugin, arg1: string, arg2: PluginMessageListener): void;
    unregisterIncomingPluginChannel(arg0: Plugin): void;
    unregisterIncomingPluginChannel(arg0: Plugin, arg1: string): void;
    registerIncomingPluginChannel(arg0: Plugin, arg1: string, arg2: PluginMessageListener): PluginMessageListenerRegistration;
    isRegistrationValid(arg0: PluginMessageListenerRegistration): boolean;
    isIncomingChannelRegistered(arg0: Plugin, arg1: string): boolean;
    getOutgoingChannels(arg0: Plugin): any;
    getOutgoingChannels(): any;
    isOutgoingChannelRegistered(arg0: Plugin, arg1: string): boolean;
    dispatchIncomingMessage(arg0: Player, arg1: string, arg2: Array<number>): void;
    getIncomingChannels(): any;
    getIncomingChannels(arg0: Plugin): any;
    getIncomingChannelRegistrations(arg0: Plugin): any;
    getIncomingChannelRegistrations(arg0: Plugin, arg1: string): any;
    getIncomingChannelRegistrations(arg0: string): any;
    isReservedChannel(arg0: string): boolean;
}
export default class Messenger {
    static get $javaClass(): any;
    static get MAX_MESSAGE_SIZE(): number;
    static get MAX_CHANNEL_SIZE(): number;
}
