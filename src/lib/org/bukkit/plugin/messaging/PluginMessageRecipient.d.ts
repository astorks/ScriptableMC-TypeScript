import { Plugin } from '../../../../org/bukkit/plugin/Plugin.js';
export interface PluginMessageRecipient {
    getListeningPluginChannels(): any;
    sendPluginMessage(arg0: Plugin, arg1: string, arg2: Array<number>): void;
}
export declare class PluginMessageRecipient {
    static get $javaClass(): any;
}
