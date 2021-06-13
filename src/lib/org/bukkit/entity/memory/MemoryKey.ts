declare var Java: any;
import Keyed from '../../../../org/bukkit/Keyed.js'
import NamespacedKey from '../../../../org/bukkit/NamespacedKey.js'

export default interface MemoryKey extends Keyed {
	getKey(): NamespacedKey;
	getMemoryClass(): any;
}

export default class MemoryKey {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.memory.MemoryKey');
	}

	public static get ADMIRING_DISABLED(): MemoryKey {
		return MemoryKey.$javaClass.ADMIRING_DISABLED;
	}

	public static get ADMIRING_ITEM(): MemoryKey {
		return MemoryKey.$javaClass.ADMIRING_ITEM;
	}

	public static get ANGRY_AT(): MemoryKey {
		return MemoryKey.$javaClass.ANGRY_AT;
	}

	public static get GOLEM_DETECTED_RECENTLY(): MemoryKey {
		return MemoryKey.$javaClass.GOLEM_DETECTED_RECENTLY;
	}

	public static get HAS_HUNTING_COOLDOWN(): MemoryKey {
		return MemoryKey.$javaClass.HAS_HUNTING_COOLDOWN;
	}

	public static get HOME(): MemoryKey {
		return MemoryKey.$javaClass.HOME;
	}

	public static get HUNTED_RECENTLY(): MemoryKey {
		return MemoryKey.$javaClass.HUNTED_RECENTLY;
	}

	public static get IS_TEMPTED(): MemoryKey {
		return MemoryKey.$javaClass.IS_TEMPTED;
	}

	public static get JOB_SITE(): MemoryKey {
		return MemoryKey.$javaClass.JOB_SITE;
	}

	public static get LAST_SLEPT(): MemoryKey {
		return MemoryKey.$javaClass.LAST_SLEPT;
	}

	public static get LAST_WOKEN(): MemoryKey {
		return MemoryKey.$javaClass.LAST_WOKEN;
	}

	public static get LAST_WORKED_AT_POI(): MemoryKey {
		return MemoryKey.$javaClass.LAST_WORKED_AT_POI;
	}

	public static get LONG_JUMP_COOLING_DOWN(): MemoryKey {
		return MemoryKey.$javaClass.LONG_JUMP_COOLING_DOWN;
	}

	public static get MEETING_POINT(): MemoryKey {
		return MemoryKey.$javaClass.MEETING_POINT;
	}

	public static get PLAY_DEAD_TICKS(): MemoryKey {
		return MemoryKey.$javaClass.PLAY_DEAD_TICKS;
	}

	public static get POTENTIAL_JOB_SITE(): MemoryKey {
		return MemoryKey.$javaClass.POTENTIAL_JOB_SITE;
	}

	public static get RAM_COOLDOWN_TICKS(): MemoryKey {
		return MemoryKey.$javaClass.RAM_COOLDOWN_TICKS;
	}

	public static get TEMPTATION_COOLDOWN_TICKS(): MemoryKey {
		return MemoryKey.$javaClass.TEMPTATION_COOLDOWN_TICKS;
	}

	public static get UNIVERSAL_ANGER(): MemoryKey {
		return MemoryKey.$javaClass.UNIVERSAL_ANGER;
	}

	public static getByKey(namespacedKey: NamespacedKey): MemoryKey;
	public static getByKey(...args: any[]): any {
		return MemoryKey.$javaClass.getByKey(...args);
	}

	public static values(): any;
	public static values(...args: any[]): any {
		return MemoryKey.$javaClass.values(...args);
	}

}

