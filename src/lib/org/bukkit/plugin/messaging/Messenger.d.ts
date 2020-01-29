import { Plugin } from '../../../../org/bukkit/plugin/Plugin.js';
import { PluginMessageListener } from '../../../../org/bukkit/plugin/messaging/PluginMessageListener.js';
import { PluginMessageListenerRegistration } from '../../../../org/bukkit/plugin/messaging/PluginMessageListenerRegistration.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
export interface Messenger {
    unregisterIncomingPluginChannel(arg0: Plugin): void;
    unregisterIncomingPluginChannel(arg0: Plugin, arg1: string): void;
    unregisterIncomingPluginChannel(arg0: Plugin, arg1: string, arg2: PluginMessageListener): void;
    unregisterOutgoingPluginChannel(arg0: Plugin): void;
    unregisterOutgoingPluginChannel(arg0: Plugin, arg1: string): void;
    registerOutgoingPluginChannel(arg0: Plugin, arg1: string): void;
    registerIncomingPluginChannel(arg0: Plugin, arg1: string, arg2: PluginMessageListener): PluginMessageListenerRegistration;
    isRegistrationValid(arg0: PluginMessageListenerRegistration): boolean;
    dispatchIncomingMessage(arg0: Player, arg1: string, arg2: Array<number>): void;
    isIncomingChannelRegistered(arg0: Plugin, arg1: string): boolean;
    getOutgoingChannels(): any;
    getOutgoingChannels(arg0: Plugin): any;
    getIncomingChannels(): any;
    getIncomingChannels(arg0: Plugin): any;
    getIncomingChannelRegistrations(arg0: Plugin, arg1: string): any;
    getIncomingChannelRegistrations(arg0: string): any;
    getIncomingChannelRegistrations(arg0: Plugin): any;
    isOutgoingChannelRegistered(arg0: Plugin, arg1: string): boolean;
    isReservedChannel(arg0: string): boolean;
}
export declare class Messenger {
    static get $javaClass(): any;
    static get MAX_MESSAGE_SIZE(): number;
    static get MAX_CHANNEL_SIZE(): number;
}
