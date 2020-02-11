import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface BukkitTask {
    getOwner(): Plugin;
    isCancelled(): boolean;
    cancel(): void;
    isSync(): boolean;
    getTaskId(): number;
}
export default class BukkitTask {
    static get $javaClass(): any;
}
