import Plugin from '../../../../org/bukkit/plugin/Plugin.js';
export default interface PluginMessageRecipient {
    sendPluginMessage(arg0: Plugin, arg1: string, arg2: Array<number>): void;
    getListeningPluginChannels(): any;
}
export default class PluginMessageRecipient {
    static get $javaClass(): any;
}
