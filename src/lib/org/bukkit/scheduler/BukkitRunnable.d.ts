import BukkitTask from '../../../org/bukkit/scheduler/BukkitTask.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface BukkitRunnable {
    runTaskAsynchronously(plugin: Plugin): BukkitTask;
    runTaskTimerAsynchronously(plugin: Plugin, delay: number, period: number): BukkitTask;
    runTaskLaterAsynchronously(plugin: Plugin, delay: number): BukkitTask;
    runTask(plugin: Plugin): BukkitTask;
    runTaskLater(plugin: Plugin, delay: number): BukkitTask;
    runTaskTimer(plugin: Plugin, delay: number, period: number): BukkitTask;
    cancel(): void;
    isCancelled(): boolean;
    getTaskId(): number;
    run(): void;
}
export default class BukkitRunnable {
    static get $javaClass(): any;
    constructor();
}
