import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface BukkitWorker {
    getOwner(): Plugin;
    getTaskId(): number;
    getThread(): any;
}
export default class BukkitWorker {
    static get $javaClass(): any;
}
