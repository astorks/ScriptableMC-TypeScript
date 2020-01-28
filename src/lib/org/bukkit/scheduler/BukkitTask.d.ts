import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
export interface BukkitTask {
    getOwner(): Plugin;
    isCancelled(): boolean;
    cancel(): void;
    getTaskId(): number;
    isSync(): boolean;
}
export declare class BukkitTask {
    static get $javaClass(): any;
}
