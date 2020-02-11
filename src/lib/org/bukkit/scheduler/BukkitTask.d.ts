import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface BukkitTask {
    getOwner(): Plugin;
    cancel(): void;
    isCancelled(): boolean;
    getTaskId(): number;
    isSync(): boolean;
}
export default class BukkitTask {
    static get $javaClass(): any;
}
