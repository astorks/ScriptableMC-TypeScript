declare var Java: any;
import Keyed from '../../../org/bukkit/Keyed.js'
import LootTable from '../../../org/bukkit/loot/LootTable.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'

export default interface LootTables extends Keyed {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	getKey(): NamespacedKey;
	getLootTable(): LootTable;
	name(): string;
	ordinal(): number;
}

export default class LootTables {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.loot.LootTables');
	}

	public static get ABANDONED_MINESHAFT(): LootTables {
		return this.$javaClass.ABANDONED_MINESHAFT;
	}
	public static get ARMORER_GIFT(): LootTables {
		return this.$javaClass.ARMORER_GIFT;
	}
	public static get ARMOR_STAND(): LootTables {
		return this.$javaClass.ARMOR_STAND;
	}
	public static get BAT(): LootTables {
		return this.$javaClass.BAT;
	}
	public static get BLAZE(): LootTables {
		return this.$javaClass.BLAZE;
	}
	public static get BURIED_TREASURE(): LootTables {
		return this.$javaClass.BURIED_TREASURE;
	}
	public static get BUTCHER_GIFT(): LootTables {
		return this.$javaClass.BUTCHER_GIFT;
	}
	public static get CARTOGRAPHER_GIFT(): LootTables {
		return this.$javaClass.CARTOGRAPHER_GIFT;
	}
	public static get CAT(): LootTables {
		return this.$javaClass.CAT;
	}
	public static get CAT_MORNING_GIFT(): LootTables {
		return this.$javaClass.CAT_MORNING_GIFT;
	}
	public static get CAVE_SPIDER(): LootTables {
		return this.$javaClass.CAVE_SPIDER;
	}
	public static get CHICKEN(): LootTables {
		return this.$javaClass.CHICKEN;
	}
	public static get CLERIC_GIFT(): LootTables {
		return this.$javaClass.CLERIC_GIFT;
	}
	public static get COD(): LootTables {
		return this.$javaClass.COD;
	}
	public static get COW(): LootTables {
		return this.$javaClass.COW;
	}
	public static get CREEPER(): LootTables {
		return this.$javaClass.CREEPER;
	}
	public static get DESERT_PYRAMID(): LootTables {
		return this.$javaClass.DESERT_PYRAMID;
	}
	public static get DOLPHIN(): LootTables {
		return this.$javaClass.DOLPHIN;
	}
	public static get DONKEY(): LootTables {
		return this.$javaClass.DONKEY;
	}
	public static get DROWNED(): LootTables {
		return this.$javaClass.DROWNED;
	}
	public static get ELDER_GUARDIAN(): LootTables {
		return this.$javaClass.ELDER_GUARDIAN;
	}
	public static get EMPTY(): LootTables {
		return this.$javaClass.EMPTY;
	}
	public static get ENDERMAN(): LootTables {
		return this.$javaClass.ENDERMAN;
	}
	public static get ENDERMITE(): LootTables {
		return this.$javaClass.ENDERMITE;
	}
	public static get ENDER_DRAGON(): LootTables {
		return this.$javaClass.ENDER_DRAGON;
	}
	public static get END_CITY_TREASURE(): LootTables {
		return this.$javaClass.END_CITY_TREASURE;
	}
	public static get EVOKER(): LootTables {
		return this.$javaClass.EVOKER;
	}
	public static get FARMER_GIFT(): LootTables {
		return this.$javaClass.FARMER_GIFT;
	}
	public static get FISHERMAN_GIFT(): LootTables {
		return this.$javaClass.FISHERMAN_GIFT;
	}
	public static get FISHING(): LootTables {
		return this.$javaClass.FISHING;
	}
	public static get FISHING_FISH(): LootTables {
		return this.$javaClass.FISHING_FISH;
	}
	public static get FISHING_JUNK(): LootTables {
		return this.$javaClass.FISHING_JUNK;
	}
	public static get FISHING_TREASURE(): LootTables {
		return this.$javaClass.FISHING_TREASURE;
	}
	public static get FLETCHER_GIFT(): LootTables {
		return this.$javaClass.FLETCHER_GIFT;
	}
	public static get FOX(): LootTables {
		return this.$javaClass.FOX;
	}
	public static get GHAST(): LootTables {
		return this.$javaClass.GHAST;
	}
	public static get GIANT(): LootTables {
		return this.$javaClass.GIANT;
	}
	public static get GUARDIAN(): LootTables {
		return this.$javaClass.GUARDIAN;
	}
	public static get HORSE(): LootTables {
		return this.$javaClass.HORSE;
	}
	public static get HUSK(): LootTables {
		return this.$javaClass.HUSK;
	}
	public static get IGLOO_CHEST(): LootTables {
		return this.$javaClass.IGLOO_CHEST;
	}
	public static get ILLUSIONER(): LootTables {
		return this.$javaClass.ILLUSIONER;
	}
	public static get IRON_GOLEM(): LootTables {
		return this.$javaClass.IRON_GOLEM;
	}
	public static get JUNGLE_TEMPLE(): LootTables {
		return this.$javaClass.JUNGLE_TEMPLE;
	}
	public static get JUNGLE_TEMPLE_DISPENSER(): LootTables {
		return this.$javaClass.JUNGLE_TEMPLE_DISPENSER;
	}
	public static get LEATHERWORKER_GIFT(): LootTables {
		return this.$javaClass.LEATHERWORKER_GIFT;
	}
	public static get LIBRARIAN_GIFT(): LootTables {
		return this.$javaClass.LIBRARIAN_GIFT;
	}
	public static get LLAMA(): LootTables {
		return this.$javaClass.LLAMA;
	}
	public static get MAGMA_CUBE(): LootTables {
		return this.$javaClass.MAGMA_CUBE;
	}
	public static get MASON_GIFT(): LootTables {
		return this.$javaClass.MASON_GIFT;
	}
	public static get MOOSHROOM(): LootTables {
		return this.$javaClass.MOOSHROOM;
	}
	public static get MULE(): LootTables {
		return this.$javaClass.MULE;
	}
	public static get NETHER_BRIDGE(): LootTables {
		return this.$javaClass.NETHER_BRIDGE;
	}
	public static get OCELOT(): LootTables {
		return this.$javaClass.OCELOT;
	}
	public static get PANDA(): LootTables {
		return this.$javaClass.PANDA;
	}
	public static get PARROT(): LootTables {
		return this.$javaClass.PARROT;
	}
	public static get PHANTOM(): LootTables {
		return this.$javaClass.PHANTOM;
	}
	public static get PIG(): LootTables {
		return this.$javaClass.PIG;
	}
	public static get PILLAGER(): LootTables {
		return this.$javaClass.PILLAGER;
	}
	public static get PILLAGER_OUTPOST(): LootTables {
		return this.$javaClass.PILLAGER_OUTPOST;
	}
	public static get POLAR_BEAR(): LootTables {
		return this.$javaClass.POLAR_BEAR;
	}
	public static get PUFFERFISH(): LootTables {
		return this.$javaClass.PUFFERFISH;
	}
	public static get RABBIT(): LootTables {
		return this.$javaClass.RABBIT;
	}
	public static get RAVAGER(): LootTables {
		return this.$javaClass.RAVAGER;
	}
	public static get SALMON(): LootTables {
		return this.$javaClass.SALMON;
	}
	public static get SHEEP(): LootTables {
		return this.$javaClass.SHEEP;
	}
	public static get SHEEP_BLACK(): LootTables {
		return this.$javaClass.SHEEP_BLACK;
	}
	public static get SHEEP_BLUE(): LootTables {
		return this.$javaClass.SHEEP_BLUE;
	}
	public static get SHEEP_BROWN(): LootTables {
		return this.$javaClass.SHEEP_BROWN;
	}
	public static get SHEEP_CYAN(): LootTables {
		return this.$javaClass.SHEEP_CYAN;
	}
	public static get SHEEP_GRAY(): LootTables {
		return this.$javaClass.SHEEP_GRAY;
	}
	public static get SHEEP_GREEN(): LootTables {
		return this.$javaClass.SHEEP_GREEN;
	}
	public static get SHEEP_LIGHT_BLUE(): LootTables {
		return this.$javaClass.SHEEP_LIGHT_BLUE;
	}
	public static get SHEEP_LIGHT_GRAY(): LootTables {
		return this.$javaClass.SHEEP_LIGHT_GRAY;
	}
	public static get SHEEP_LIME(): LootTables {
		return this.$javaClass.SHEEP_LIME;
	}
	public static get SHEEP_MAGENTA(): LootTables {
		return this.$javaClass.SHEEP_MAGENTA;
	}
	public static get SHEEP_ORANGE(): LootTables {
		return this.$javaClass.SHEEP_ORANGE;
	}
	public static get SHEEP_PINK(): LootTables {
		return this.$javaClass.SHEEP_PINK;
	}
	public static get SHEEP_PURPLE(): LootTables {
		return this.$javaClass.SHEEP_PURPLE;
	}
	public static get SHEEP_RED(): LootTables {
		return this.$javaClass.SHEEP_RED;
	}
	public static get SHEEP_WHITE(): LootTables {
		return this.$javaClass.SHEEP_WHITE;
	}
	public static get SHEEP_YELLOW(): LootTables {
		return this.$javaClass.SHEEP_YELLOW;
	}
	public static get SHEPHERD_GIFT(): LootTables {
		return this.$javaClass.SHEPHERD_GIFT;
	}
	public static get SHIPWRECK_MAP(): LootTables {
		return this.$javaClass.SHIPWRECK_MAP;
	}
	public static get SHIPWRECK_SUPPLY(): LootTables {
		return this.$javaClass.SHIPWRECK_SUPPLY;
	}
	public static get SHIPWRECK_TREASURE(): LootTables {
		return this.$javaClass.SHIPWRECK_TREASURE;
	}
	public static get SHULKER(): LootTables {
		return this.$javaClass.SHULKER;
	}
	public static get SILVERFISH(): LootTables {
		return this.$javaClass.SILVERFISH;
	}
	public static get SIMPLE_DUNGEON(): LootTables {
		return this.$javaClass.SIMPLE_DUNGEON;
	}
	public static get SKELETON(): LootTables {
		return this.$javaClass.SKELETON;
	}
	public static get SKELETON_HORSE(): LootTables {
		return this.$javaClass.SKELETON_HORSE;
	}
	public static get SLIME(): LootTables {
		return this.$javaClass.SLIME;
	}
	public static get SNOW_GOLEM(): LootTables {
		return this.$javaClass.SNOW_GOLEM;
	}
	public static get SPAWN_BONUS_CHEST(): LootTables {
		return this.$javaClass.SPAWN_BONUS_CHEST;
	}
	public static get SPIDER(): LootTables {
		return this.$javaClass.SPIDER;
	}
	public static get SQUID(): LootTables {
		return this.$javaClass.SQUID;
	}
	public static get STRAY(): LootTables {
		return this.$javaClass.STRAY;
	}
	public static get STRONGHOLD_CORRIDOR(): LootTables {
		return this.$javaClass.STRONGHOLD_CORRIDOR;
	}
	public static get STRONGHOLD_CROSSING(): LootTables {
		return this.$javaClass.STRONGHOLD_CROSSING;
	}
	public static get STRONGHOLD_LIBRARY(): LootTables {
		return this.$javaClass.STRONGHOLD_LIBRARY;
	}
	public static get TOOLSMITH_GIFT(): LootTables {
		return this.$javaClass.TOOLSMITH_GIFT;
	}
	public static get TRADER_LLAMA(): LootTables {
		return this.$javaClass.TRADER_LLAMA;
	}
	public static get TROPICAL_FISH(): LootTables {
		return this.$javaClass.TROPICAL_FISH;
	}
	public static get TURTLE(): LootTables {
		return this.$javaClass.TURTLE;
	}
	public static get UNDERWATER_RUIN_BIG(): LootTables {
		return this.$javaClass.UNDERWATER_RUIN_BIG;
	}
	public static get UNDERWATER_RUIN_SMALL(): LootTables {
		return this.$javaClass.UNDERWATER_RUIN_SMALL;
	}
	public static get VEX(): LootTables {
		return this.$javaClass.VEX;
	}
	public static get VILLAGER(): LootTables {
		return this.$javaClass.VILLAGER;
	}
	public static get VILLAGE_ARMORER(): LootTables {
		return this.$javaClass.VILLAGE_ARMORER;
	}
	public static get VILLAGE_BUTCHER(): LootTables {
		return this.$javaClass.VILLAGE_BUTCHER;
	}
	public static get VILLAGE_CARTOGRAPHER(): LootTables {
		return this.$javaClass.VILLAGE_CARTOGRAPHER;
	}
	public static get VILLAGE_DESERT_HOUSE(): LootTables {
		return this.$javaClass.VILLAGE_DESERT_HOUSE;
	}
	public static get VILLAGE_FISHER(): LootTables {
		return this.$javaClass.VILLAGE_FISHER;
	}
	public static get VILLAGE_FLETCHER(): LootTables {
		return this.$javaClass.VILLAGE_FLETCHER;
	}
	public static get VILLAGE_MASON(): LootTables {
		return this.$javaClass.VILLAGE_MASON;
	}
	public static get VILLAGE_PLAINS_HOUSE(): LootTables {
		return this.$javaClass.VILLAGE_PLAINS_HOUSE;
	}
	public static get VILLAGE_SAVANNA_HOUSE(): LootTables {
		return this.$javaClass.VILLAGE_SAVANNA_HOUSE;
	}
	public static get VILLAGE_SHEPHERD(): LootTables {
		return this.$javaClass.VILLAGE_SHEPHERD;
	}
	public static get VILLAGE_SNOWY_HOUSE(): LootTables {
		return this.$javaClass.VILLAGE_SNOWY_HOUSE;
	}
	public static get VILLAGE_TAIGA_HOUSE(): LootTables {
		return this.$javaClass.VILLAGE_TAIGA_HOUSE;
	}
	public static get VILLAGE_TANNERY(): LootTables {
		return this.$javaClass.VILLAGE_TANNERY;
	}
	public static get VILLAGE_TEMPLE(): LootTables {
		return this.$javaClass.VILLAGE_TEMPLE;
	}
	public static get VILLAGE_TOOLSMITH(): LootTables {
		return this.$javaClass.VILLAGE_TOOLSMITH;
	}
	public static get VILLAGE_WEAPONSMITH(): LootTables {
		return this.$javaClass.VILLAGE_WEAPONSMITH;
	}
	public static get VINDICATOR(): LootTables {
		return this.$javaClass.VINDICATOR;
	}
	public static get WANDERING_TRADER(): LootTables {
		return this.$javaClass.WANDERING_TRADER;
	}
	public static get WEAPONSMITH_GIFT(): LootTables {
		return this.$javaClass.WEAPONSMITH_GIFT;
	}
	public static get WITCH(): LootTables {
		return this.$javaClass.WITCH;
	}
	public static get WITHER(): LootTables {
		return this.$javaClass.WITHER;
	}
	public static get WITHER_SKELETON(): LootTables {
		return this.$javaClass.WITHER_SKELETON;
	}
	public static get WOLF(): LootTables {
		return this.$javaClass.WOLF;
	}
	public static get WOODLAND_MANSION(): LootTables {
		return this.$javaClass.WOODLAND_MANSION;
	}
	public static get ZOMBIE(): LootTables {
		return this.$javaClass.ZOMBIE;
	}
	public static get ZOMBIE_HORSE(): LootTables {
		return this.$javaClass.ZOMBIE_HORSE;
	}
	public static get ZOMBIE_PIGMAN(): LootTables {
		return this.$javaClass.ZOMBIE_PIGMAN;
	}
	public static get ZOMBIE_VILLAGER(): LootTables {
		return this.$javaClass.ZOMBIE_VILLAGER;
	}
}

