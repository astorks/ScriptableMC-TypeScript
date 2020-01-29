import { BukkitTask } from '../../../org/bukkit/scheduler/BukkitTask.js';
import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
export interface BukkitRunnable {
    runTaskAsynchronously(plugin: Plugin): BukkitTask;
    runTaskLaterAsynchronously(plugin: Plugin, delay: number): BukkitTask;
    runTaskTimerAsynchronously(plugin: Plugin, delay: number, period: number): BukkitTask;
    runTaskTimer(plugin: Plugin, delay: number, period: number): BukkitTask;
    runTaskLater(plugin: Plugin, delay: number): BukkitTask;
    runTask(plugin: Plugin): BukkitTask;
    isCancelled(): boolean;
    cancel(): void;
    getTaskId(): number;
    run(): void;
}
export declare class BukkitRunnable {
    static get $javaClass(): any;
    constructor();
}
