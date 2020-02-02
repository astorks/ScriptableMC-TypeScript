import Messenger from '../../../../org/bukkit/plugin/messaging/Messenger.js';
import Plugin from '../../../../org/bukkit/plugin/Plugin.js';
import PluginMessageListener from '../../../../org/bukkit/plugin/messaging/PluginMessageListener.js';
export default interface PluginMessageListenerRegistration {
    getChannel(): string;
    getPlugin(): Plugin;
    isValid(): boolean;
    getListener(): PluginMessageListener;
}
export default class PluginMessageListenerRegistration {
    static get $javaClass(): any;
    constructor(messenger: Messenger, plugin: Plugin, channel: string, listener: PluginMessageListener);
}
