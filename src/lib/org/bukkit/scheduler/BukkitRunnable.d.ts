import BukkitTask from '../../../org/bukkit/scheduler/BukkitTask.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface BukkitRunnable {
    runTaskAsynchronously(plugin: Plugin): BukkitTask;
    runTask(plugin: Plugin): BukkitTask;
    runTaskLater(plugin: Plugin, delay: number): BukkitTask;
    runTaskLaterAsynchronously(plugin: Plugin, delay: number): BukkitTask;
    runTaskTimer(plugin: Plugin, delay: number, period: number): BukkitTask;
    runTaskTimerAsynchronously(plugin: Plugin, delay: number, period: number): BukkitTask;
    isCancelled(): boolean;
    cancel(): void;
    getTaskId(): number;
    run(): void;
}
export default class BukkitRunnable {
    static get $javaClass(): any;
    constructor();
}
