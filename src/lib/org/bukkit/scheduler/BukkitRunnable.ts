declare var Java: any;
import BukkitTask from '../../../org/bukkit/scheduler/BukkitTask.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface BukkitRunnable {
	cancel(): void;
	getTaskId(): number;
	isCancelled(): boolean;
	run(): void;
	runTask(plugin: Plugin): BukkitTask;
	runTaskAsynchronously(plugin: Plugin): BukkitTask;
	runTaskLater(plugin: Plugin, delay: number): BukkitTask;
	runTaskLaterAsynchronously(plugin: Plugin, delay: number): BukkitTask;
	runTaskTimer(plugin: Plugin, delay: number, period: number): BukkitTask;
	runTaskTimerAsynchronously(plugin: Plugin, delay: number, period: number): BukkitTask;
}

export default class BukkitRunnable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scheduler.BukkitRunnable');
	}

	constructor();
	constructor(...args: any[]) {
		return new BukkitRunnable.$javaClass(...args);
	}

}

