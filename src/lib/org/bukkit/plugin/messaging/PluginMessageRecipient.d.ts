import { Plugin } from '../../../../org/bukkit/plugin/Plugin.js';
export interface PluginMessageRecipient {
    sendPluginMessage(arg0: Plugin, arg1: string, arg2: Array<number>): void;
    getListeningPluginChannels(): any;
}
export declare class PluginMessageRecipient {
    static get $javaClass(): any;
}
