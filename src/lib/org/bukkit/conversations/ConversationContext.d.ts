import Conversable from '../../../org/bukkit/conversations/Conversable.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface ConversationContext {
    getPlugin(): Plugin;
    getForWhom(): Conversable;
    getSessionData(key: any): any;
    getAllSessionData(): any;
    setSessionData(key: any, value: any): void;
}
export default class ConversationContext {
    static get $javaClass(): any;
    constructor(plugin: Plugin, forWhom: Conversable, initialSessionData: any);
}
