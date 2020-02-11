import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface BukkitWorker {
    getOwner(): Plugin;
    getThread(): any;
    getTaskId(): number;
}
export default class BukkitWorker {
    static get $javaClass(): any;
}
