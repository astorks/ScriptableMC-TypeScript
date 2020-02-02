import BukkitRunnable from '../../../org/bukkit/scheduler/BukkitRunnable.js';
import BukkitTask from '../../../org/bukkit/scheduler/BukkitTask.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface BukkitScheduler {
    isQueued(arg0: number): boolean;
    callSyncMethod(arg0: Plugin, arg1: any): any;
    cancelTask(arg0: number): void;
    cancelTasks(arg0: Plugin): void;
    runTask(arg0: Plugin, arg1: BukkitRunnable): BukkitTask;
    runTask(arg0: Plugin, arg1: any): void;
    runTask(arg0: Plugin, arg1: any): BukkitTask;
    getPendingTasks(): any;
    isCurrentlyRunning(arg0: number): boolean;
    runTaskTimer(arg0: Plugin, arg1: BukkitRunnable, arg2: number, arg3: number): BukkitTask;
    runTaskTimer(arg0: Plugin, arg1: any, arg2: number, arg3: number): void;
    runTaskTimer(arg0: Plugin, arg1: any, arg2: number, arg3: number): BukkitTask;
    runTaskLater(arg0: Plugin, arg1: any, arg2: number): void;
    runTaskLater(arg0: Plugin, arg1: any, arg2: number): BukkitTask;
    runTaskLater(arg0: Plugin, arg1: BukkitRunnable, arg2: number): BukkitTask;
    getActiveWorkers(): any;
    runTaskAsynchronously(arg0: Plugin, arg1: any): BukkitTask;
    runTaskAsynchronously(arg0: Plugin, arg1: any): void;
    runTaskAsynchronously(arg0: Plugin, arg1: BukkitRunnable): BukkitTask;
    runTaskTimerAsynchronously(arg0: Plugin, arg1: any, arg2: number, arg3: number): BukkitTask;
    runTaskTimerAsynchronously(arg0: Plugin, arg1: any, arg2: number, arg3: number): void;
    runTaskTimerAsynchronously(arg0: Plugin, arg1: BukkitRunnable, arg2: number, arg3: number): BukkitTask;
    scheduleSyncRepeatingTask(arg0: Plugin, arg1: BukkitRunnable, arg2: number, arg3: number): number;
    scheduleSyncRepeatingTask(arg0: Plugin, arg1: any, arg2: number, arg3: number): number;
    runTaskLaterAsynchronously(arg0: Plugin, arg1: BukkitRunnable, arg2: number): BukkitTask;
    runTaskLaterAsynchronously(arg0: Plugin, arg1: any, arg2: number): void;
    runTaskLaterAsynchronously(arg0: Plugin, arg1: any, arg2: number): BukkitTask;
    scheduleAsyncRepeatingTask(arg0: Plugin, arg1: any, arg2: number, arg3: number): number;
    scheduleAsyncDelayedTask(arg0: Plugin, arg1: any): number;
    scheduleAsyncDelayedTask(arg0: Plugin, arg1: any, arg2: number): number;
    scheduleSyncDelayedTask(arg0: Plugin, arg1: BukkitRunnable, arg2: number): number;
    scheduleSyncDelayedTask(arg0: Plugin, arg1: any, arg2: number): number;
    scheduleSyncDelayedTask(arg0: Plugin, arg1: any): number;
    scheduleSyncDelayedTask(arg0: Plugin, arg1: BukkitRunnable): number;
}
export default class BukkitScheduler {
    static get $javaClass(): any;
}
