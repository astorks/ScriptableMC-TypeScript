import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
import { Conversable } from '../../../org/bukkit/conversations/Conversable.js';
export interface ConversationContext {
    getPlugin(): Plugin;
    getForWhom(): Conversable;
    getAllSessionData(): any;
    getSessionData(key: any): any;
    setSessionData(key: any, value: any): void;
}
export declare class ConversationContext {
    static get $javaClass(): any;
    constructor(plugin: Plugin, forWhom: Conversable, initialSessionData: any);
}
