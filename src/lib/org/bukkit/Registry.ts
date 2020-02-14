declare var Java: any;
import Keyed from '../../org/bukkit/Keyed.js'
import NamespacedKey from '../../org/bukkit/NamespacedKey.js'

export default interface Registry {
	forEach(action: any): void;
	get(arg0: NamespacedKey): Keyed;
	iterator(): any;
	spliterator(): any;
}

export default class Registry {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Registry');
	}

	public static get ADVANCEMENT(): Registry {
		return Registry.$javaClass.ADVANCEMENT;
	}

	public static get ART(): Registry {
		return Registry.$javaClass.ART;
	}

	public static get BIOME(): Registry {
		return Registry.$javaClass.BIOME;
	}

	public static get BOSS_BARS(): Registry {
		return Registry.$javaClass.BOSS_BARS;
	}

	public static get ENCHANTMENT(): Registry {
		return Registry.$javaClass.ENCHANTMENT;
	}

	public static get ENTITY_TYPE(): Registry {
		return Registry.$javaClass.ENTITY_TYPE;
	}

	public static get LOOT_TABLES(): Registry {
		return Registry.$javaClass.LOOT_TABLES;
	}

	public static get MATERIAL(): Registry {
		return Registry.$javaClass.MATERIAL;
	}

	public static get MEMORY_MODULE_TYPE(): Registry {
		return Registry.$javaClass.MEMORY_MODULE_TYPE;
	}

	public static get STATISTIC(): Registry {
		return Registry.$javaClass.STATISTIC;
	}

	public static get VILLAGER_PROFESSION(): Registry {
		return Registry.$javaClass.VILLAGER_PROFESSION;
	}

	public static get VILLAGER_TYPE(): Registry {
		return Registry.$javaClass.VILLAGER_TYPE;
	}

}

