declare var Java: any;
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface BukkitTask {
	isCancelled(): boolean;
	cancel(): void;
	getOwner(): Plugin;
	getTaskId(): number;
	isSync(): boolean;
}

export default class BukkitTask {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scheduler.BukkitTask');
	}
}

