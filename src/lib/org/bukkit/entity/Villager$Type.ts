declare var Java: any;
import Keyed from '../../../org/bukkit/Keyed.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'

export default interface Villager$Type extends Keyed {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	getKey(): NamespacedKey;
	name(): string;
	ordinal(): number;
}

export default class Villager$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Villager$Type');
	}

	public static get DESERT(): Villager$Type {
		return this.$javaClass.DESERT;
	}
	public static get JUNGLE(): Villager$Type {
		return this.$javaClass.JUNGLE;
	}
	public static get PLAINS(): Villager$Type {
		return this.$javaClass.PLAINS;
	}
	public static get SAVANNA(): Villager$Type {
		return this.$javaClass.SAVANNA;
	}
	public static get SNOW(): Villager$Type {
		return this.$javaClass.SNOW;
	}
	public static get SWAMP(): Villager$Type {
		return this.$javaClass.SWAMP;
	}
	public static get TAIGA(): Villager$Type {
		return this.$javaClass.TAIGA;
	}
}

