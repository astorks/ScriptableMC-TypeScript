import { PluginMessageListenerRegistration } from '../../../../org/bukkit/plugin/messaging/PluginMessageListenerRegistration.js';
import { Plugin } from '../../../../org/bukkit/plugin/Plugin.js';
import { PluginMessageListener } from '../../../../org/bukkit/plugin/messaging/PluginMessageListener.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
export interface Messenger {
    registerIncomingPluginChannel(arg0: Plugin, arg1: string, arg2: PluginMessageListener): PluginMessageListenerRegistration;
    unregisterIncomingPluginChannel(arg0: Plugin, arg1: string): void;
    unregisterIncomingPluginChannel(arg0: Plugin): void;
    unregisterIncomingPluginChannel(arg0: Plugin, arg1: string, arg2: PluginMessageListener): void;
    registerOutgoingPluginChannel(arg0: Plugin, arg1: string): void;
    unregisterOutgoingPluginChannel(arg0: Plugin, arg1: string): void;
    unregisterOutgoingPluginChannel(arg0: Plugin): void;
    isRegistrationValid(arg0: PluginMessageListenerRegistration): boolean;
    getOutgoingChannels(): any;
    getOutgoingChannels(arg0: Plugin): any;
    getIncomingChannels(arg0: Plugin): any;
    getIncomingChannels(): any;
    getIncomingChannelRegistrations(arg0: Plugin, arg1: string): any;
    getIncomingChannelRegistrations(arg0: Plugin): any;
    getIncomingChannelRegistrations(arg0: string): any;
    isIncomingChannelRegistered(arg0: Plugin, arg1: string): boolean;
    isOutgoingChannelRegistered(arg0: Plugin, arg1: string): boolean;
    dispatchIncomingMessage(arg0: Player, arg1: string, arg2: Array<number>): void;
    isReservedChannel(arg0: string): boolean;
}
export declare class Messenger {
    static get $javaClass(): any;
    static get MAX_MESSAGE_SIZE(): number;
    static get MAX_CHANNEL_SIZE(): number;
}
