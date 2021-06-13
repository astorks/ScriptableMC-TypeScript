declare var Java: any;
import Keyed from '../../../org/bukkit/Keyed.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'

export default interface Villager$Type extends Keyed {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
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
	public static valueOf(arg0: string): Villager$Type;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Villager$Type.$javaClass.valueOf(...args);
	}

	public static values(): Array<Villager$Type>;
	public static values(...args: any[]): any {
		return Villager$Type.$javaClass.values(...args);
	}

}

