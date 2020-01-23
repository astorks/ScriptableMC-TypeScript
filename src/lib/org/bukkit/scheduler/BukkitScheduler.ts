declare var Java: any;
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {BukkitRunnable} from '../../../org/bukkit/scheduler/BukkitRunnable.js'
import {BukkitTask} from '../../../org/bukkit/scheduler/BukkitTask.js'

export interface BukkitScheduler {
	isQueued(taskId: number): boolean;
	scheduleSyncDelayedTask(plugin: Plugin, task: any, delay: number): number;
	scheduleSyncDelayedTask(plugin: Plugin, task: BukkitRunnable): number;
	scheduleSyncDelayedTask(plugin: Plugin, task: BukkitRunnable, delay: number): number;
	scheduleSyncDelayedTask(plugin: Plugin, task: any): number;
	scheduleAsyncDelayedTask(plugin: Plugin, task: any, delay: number): number;
	scheduleAsyncDelayedTask(plugin: Plugin, task: any): number;
	scheduleSyncRepeatingTask(plugin: Plugin, task: BukkitRunnable, delay: number, period: number): number;
	scheduleSyncRepeatingTask(plugin: Plugin, task: any, delay: number, period: number): number;
	scheduleAsyncRepeatingTask(plugin: Plugin, task: any, delay: number, period: number): number;
	runTaskTimerAsynchronously(plugin: Plugin, task: any, delay: number, period: number): void;
	runTaskTimerAsynchronously(plugin: Plugin, task: BukkitRunnable, delay: number, period: number): BukkitTask;
	runTaskTimerAsynchronously(plugin: Plugin, task: any, delay: number, period: number): BukkitTask;
	runTaskAsynchronously(plugin: Plugin, task: any): BukkitTask;
	runTaskAsynchronously(plugin: Plugin, task: any): void;
	runTaskAsynchronously(plugin: Plugin, task: BukkitRunnable): BukkitTask;
	runTaskLaterAsynchronously(plugin: Plugin, task: BukkitRunnable, delay: number): BukkitTask;
	runTaskLaterAsynchronously(plugin: Plugin, task: any, delay: number): void;
	runTaskLaterAsynchronously(plugin: Plugin, task: any, delay: number): BukkitTask;
	callSyncMethod(plugin: Plugin, task: any): any;
	cancelTasks(plugin: Plugin): void;
	getPendingTasks(): any;
	getActiveWorkers(): any;
	runTaskTimer(plugin: Plugin, task: any, delay: number, period: number): void;
	runTaskTimer(plugin: Plugin, task: any, delay: number, period: number): BukkitTask;
	runTaskTimer(plugin: Plugin, task: BukkitRunnable, delay: number, period: number): BukkitTask;
	runTaskLater(plugin: Plugin, task: any, delay: number): void;
	runTaskLater(plugin: Plugin, task: BukkitRunnable, delay: number): BukkitTask;
	runTaskLater(plugin: Plugin, task: any, delay: number): BukkitTask;
	isCurrentlyRunning(taskId: number): boolean;
	cancelTask(taskId: number): void;
	runTask(plugin: Plugin, task: BukkitRunnable): BukkitTask;
	runTask(plugin: Plugin, task: any): BukkitTask;
	runTask(plugin: Plugin, task: any): void;
}

export class BukkitScheduler {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scheduler.BukkitScheduler');
	}
}

