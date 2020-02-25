declare var Java: any;
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface BukkitTask {
	cancel(): void;
	getOwner(): Plugin;
	getTaskId(): number;
	isCancelled(): boolean;
	isSync(): boolean;
}

export default class BukkitTask {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scheduler.BukkitTask');
	}

}

