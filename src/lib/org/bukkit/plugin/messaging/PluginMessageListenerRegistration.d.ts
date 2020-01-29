import { Plugin } from '../../../../org/bukkit/plugin/Plugin.js';
import { PluginMessageListener } from '../../../../org/bukkit/plugin/messaging/PluginMessageListener.js';
import { Messenger } from '../../../../org/bukkit/plugin/messaging/Messenger.js';
export interface PluginMessageListenerRegistration {
    getChannel(): string;
    getPlugin(): Plugin;
    getListener(): PluginMessageListener;
    isValid(): boolean;
}
export declare class PluginMessageListenerRegistration {
    static get $javaClass(): any;
    constructor(messenger: Messenger, plugin: Plugin, channel: string, listener: PluginMessageListener);
}
