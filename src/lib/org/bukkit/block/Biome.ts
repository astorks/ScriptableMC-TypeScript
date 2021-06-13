declare var Java: any;
import Keyed from '../../../org/bukkit/Keyed.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'

export default interface Biome extends Keyed {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	getKey(): NamespacedKey;
	name(): string;
	ordinal(): number;
}

export default class Biome {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.Biome');
	}

	public static get BADLANDS(): Biome {
		return this.$javaClass.BADLANDS;
	}
	public static get BADLANDS_PLATEAU(): Biome {
		return this.$javaClass.BADLANDS_PLATEAU;
	}
	public static get BAMBOO_JUNGLE(): Biome {
		return this.$javaClass.BAMBOO_JUNGLE;
	}
	public static get BAMBOO_JUNGLE_HILLS(): Biome {
		return this.$javaClass.BAMBOO_JUNGLE_HILLS;
	}
	public static get BASALT_DELTAS(): Biome {
		return this.$javaClass.BASALT_DELTAS;
	}
	public static get BEACH(): Biome {
		return this.$javaClass.BEACH;
	}
	public static get BIRCH_FOREST(): Biome {
		return this.$javaClass.BIRCH_FOREST;
	}
	public static get BIRCH_FOREST_HILLS(): Biome {
		return this.$javaClass.BIRCH_FOREST_HILLS;
	}
	public static get COLD_OCEAN(): Biome {
		return this.$javaClass.COLD_OCEAN;
	}
	public static get CRIMSON_FOREST(): Biome {
		return this.$javaClass.CRIMSON_FOREST;
	}
	public static get CUSTOM(): Biome {
		return this.$javaClass.CUSTOM;
	}
	public static get DARK_FOREST(): Biome {
		return this.$javaClass.DARK_FOREST;
	}
	public static get DARK_FOREST_HILLS(): Biome {
		return this.$javaClass.DARK_FOREST_HILLS;
	}
	public static get DEEP_COLD_OCEAN(): Biome {
		return this.$javaClass.DEEP_COLD_OCEAN;
	}
	public static get DEEP_FROZEN_OCEAN(): Biome {
		return this.$javaClass.DEEP_FROZEN_OCEAN;
	}
	public static get DEEP_LUKEWARM_OCEAN(): Biome {
		return this.$javaClass.DEEP_LUKEWARM_OCEAN;
	}
	public static get DEEP_OCEAN(): Biome {
		return this.$javaClass.DEEP_OCEAN;
	}
	public static get DEEP_WARM_OCEAN(): Biome {
		return this.$javaClass.DEEP_WARM_OCEAN;
	}
	public static get DESERT(): Biome {
		return this.$javaClass.DESERT;
	}
	public static get DESERT_HILLS(): Biome {
		return this.$javaClass.DESERT_HILLS;
	}
	public static get DESERT_LAKES(): Biome {
		return this.$javaClass.DESERT_LAKES;
	}
	public static get DRIPSTONE_CAVES(): Biome {
		return this.$javaClass.DRIPSTONE_CAVES;
	}
	public static get END_BARRENS(): Biome {
		return this.$javaClass.END_BARRENS;
	}
	public static get END_HIGHLANDS(): Biome {
		return this.$javaClass.END_HIGHLANDS;
	}
	public static get END_MIDLANDS(): Biome {
		return this.$javaClass.END_MIDLANDS;
	}
	public static get ERODED_BADLANDS(): Biome {
		return this.$javaClass.ERODED_BADLANDS;
	}
	public static get FLOWER_FOREST(): Biome {
		return this.$javaClass.FLOWER_FOREST;
	}
	public static get FOREST(): Biome {
		return this.$javaClass.FOREST;
	}
	public static get FROZEN_OCEAN(): Biome {
		return this.$javaClass.FROZEN_OCEAN;
	}
	public static get FROZEN_RIVER(): Biome {
		return this.$javaClass.FROZEN_RIVER;
	}
	public static get GIANT_SPRUCE_TAIGA(): Biome {
		return this.$javaClass.GIANT_SPRUCE_TAIGA;
	}
	public static get GIANT_SPRUCE_TAIGA_HILLS(): Biome {
		return this.$javaClass.GIANT_SPRUCE_TAIGA_HILLS;
	}
	public static get GIANT_TREE_TAIGA(): Biome {
		return this.$javaClass.GIANT_TREE_TAIGA;
	}
	public static get GIANT_TREE_TAIGA_HILLS(): Biome {
		return this.$javaClass.GIANT_TREE_TAIGA_HILLS;
	}
	public static get GRAVELLY_MOUNTAINS(): Biome {
		return this.$javaClass.GRAVELLY_MOUNTAINS;
	}
	public static get ICE_SPIKES(): Biome {
		return this.$javaClass.ICE_SPIKES;
	}
	public static get JUNGLE(): Biome {
		return this.$javaClass.JUNGLE;
	}
	public static get JUNGLE_EDGE(): Biome {
		return this.$javaClass.JUNGLE_EDGE;
	}
	public static get JUNGLE_HILLS(): Biome {
		return this.$javaClass.JUNGLE_HILLS;
	}
	public static get LUKEWARM_OCEAN(): Biome {
		return this.$javaClass.LUKEWARM_OCEAN;
	}
	public static get LUSH_CAVES(): Biome {
		return this.$javaClass.LUSH_CAVES;
	}
	public static get MODIFIED_BADLANDS_PLATEAU(): Biome {
		return this.$javaClass.MODIFIED_BADLANDS_PLATEAU;
	}
	public static get MODIFIED_GRAVELLY_MOUNTAINS(): Biome {
		return this.$javaClass.MODIFIED_GRAVELLY_MOUNTAINS;
	}
	public static get MODIFIED_JUNGLE(): Biome {
		return this.$javaClass.MODIFIED_JUNGLE;
	}
	public static get MODIFIED_JUNGLE_EDGE(): Biome {
		return this.$javaClass.MODIFIED_JUNGLE_EDGE;
	}
	public static get MODIFIED_WOODED_BADLANDS_PLATEAU(): Biome {
		return this.$javaClass.MODIFIED_WOODED_BADLANDS_PLATEAU;
	}
	public static get MOUNTAINS(): Biome {
		return this.$javaClass.MOUNTAINS;
	}
	public static get MOUNTAIN_EDGE(): Biome {
		return this.$javaClass.MOUNTAIN_EDGE;
	}
	public static get MUSHROOM_FIELDS(): Biome {
		return this.$javaClass.MUSHROOM_FIELDS;
	}
	public static get MUSHROOM_FIELD_SHORE(): Biome {
		return this.$javaClass.MUSHROOM_FIELD_SHORE;
	}
	public static get NETHER_WASTES(): Biome {
		return this.$javaClass.NETHER_WASTES;
	}
	public static get OCEAN(): Biome {
		return this.$javaClass.OCEAN;
	}
	public static get PLAINS(): Biome {
		return this.$javaClass.PLAINS;
	}
	public static get RIVER(): Biome {
		return this.$javaClass.RIVER;
	}
	public static get SAVANNA(): Biome {
		return this.$javaClass.SAVANNA;
	}
	public static get SAVANNA_PLATEAU(): Biome {
		return this.$javaClass.SAVANNA_PLATEAU;
	}
	public static get SHATTERED_SAVANNA(): Biome {
		return this.$javaClass.SHATTERED_SAVANNA;
	}
	public static get SHATTERED_SAVANNA_PLATEAU(): Biome {
		return this.$javaClass.SHATTERED_SAVANNA_PLATEAU;
	}
	public static get SMALL_END_ISLANDS(): Biome {
		return this.$javaClass.SMALL_END_ISLANDS;
	}
	public static get SNOWY_BEACH(): Biome {
		return this.$javaClass.SNOWY_BEACH;
	}
	public static get SNOWY_MOUNTAINS(): Biome {
		return this.$javaClass.SNOWY_MOUNTAINS;
	}
	public static get SNOWY_TAIGA(): Biome {
		return this.$javaClass.SNOWY_TAIGA;
	}
	public static get SNOWY_TAIGA_HILLS(): Biome {
		return this.$javaClass.SNOWY_TAIGA_HILLS;
	}
	public static get SNOWY_TAIGA_MOUNTAINS(): Biome {
		return this.$javaClass.SNOWY_TAIGA_MOUNTAINS;
	}
	public static get SNOWY_TUNDRA(): Biome {
		return this.$javaClass.SNOWY_TUNDRA;
	}
	public static get SOUL_SAND_VALLEY(): Biome {
		return this.$javaClass.SOUL_SAND_VALLEY;
	}
	public static get STONE_SHORE(): Biome {
		return this.$javaClass.STONE_SHORE;
	}
	public static get SUNFLOWER_PLAINS(): Biome {
		return this.$javaClass.SUNFLOWER_PLAINS;
	}
	public static get SWAMP(): Biome {
		return this.$javaClass.SWAMP;
	}
	public static get SWAMP_HILLS(): Biome {
		return this.$javaClass.SWAMP_HILLS;
	}
	public static get TAIGA(): Biome {
		return this.$javaClass.TAIGA;
	}
	public static get TAIGA_HILLS(): Biome {
		return this.$javaClass.TAIGA_HILLS;
	}
	public static get TAIGA_MOUNTAINS(): Biome {
		return this.$javaClass.TAIGA_MOUNTAINS;
	}
	public static get TALL_BIRCH_FOREST(): Biome {
		return this.$javaClass.TALL_BIRCH_FOREST;
	}
	public static get TALL_BIRCH_HILLS(): Biome {
		return this.$javaClass.TALL_BIRCH_HILLS;
	}
	public static get THE_END(): Biome {
		return this.$javaClass.THE_END;
	}
	public static get THE_VOID(): Biome {
		return this.$javaClass.THE_VOID;
	}
	public static get WARM_OCEAN(): Biome {
		return this.$javaClass.WARM_OCEAN;
	}
	public static get WARPED_FOREST(): Biome {
		return this.$javaClass.WARPED_FOREST;
	}
	public static get WOODED_BADLANDS_PLATEAU(): Biome {
		return this.$javaClass.WOODED_BADLANDS_PLATEAU;
	}
	public static get WOODED_HILLS(): Biome {
		return this.$javaClass.WOODED_HILLS;
	}
	public static get WOODED_MOUNTAINS(): Biome {
		return this.$javaClass.WOODED_MOUNTAINS;
	}
	public static valueOf(arg0: string): Biome;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Biome.$javaClass.valueOf(...args);
	}

	public static values(): Array<Biome>;
	public static values(...args: any[]): any {
		return Biome.$javaClass.values(...args);
	}

}

