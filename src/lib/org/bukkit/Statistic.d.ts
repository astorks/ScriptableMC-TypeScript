import Keyed from '../../org/bukkit/Keyed.js';
import NamespacedKey from '../../org/bukkit/NamespacedKey.js';
import Statistic$Type from '../../org/bukkit/Statistic$Type.js';
export default interface Statistic extends Keyed {
    isBlock(): boolean;
    isSubstatistic(): boolean;
    getKey(): NamespacedKey;
    getType(): Statistic$Type;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class Statistic {
    static get $javaClass(): any;
    static get DAMAGE_DEALT(): Statistic;
    static get DAMAGE_TAKEN(): Statistic;
    static get DEATHS(): Statistic;
    static get MOB_KILLS(): Statistic;
    static get PLAYER_KILLS(): Statistic;
    static get FISH_CAUGHT(): Statistic;
    static get ANIMALS_BRED(): Statistic;
    static get LEAVE_GAME(): Statistic;
    static get JUMP(): Statistic;
    static get DROP_COUNT(): Statistic;
    static get DROP(): Statistic;
    static get PICKUP(): Statistic;
    static get PLAY_ONE_MINUTE(): Statistic;
    static get WALK_ONE_CM(): Statistic;
    static get WALK_ON_WATER_ONE_CM(): Statistic;
    static get FALL_ONE_CM(): Statistic;
    static get SNEAK_TIME(): Statistic;
    static get CLIMB_ONE_CM(): Statistic;
    static get FLY_ONE_CM(): Statistic;
    static get WALK_UNDER_WATER_ONE_CM(): Statistic;
    static get MINECART_ONE_CM(): Statistic;
    static get BOAT_ONE_CM(): Statistic;
    static get PIG_ONE_CM(): Statistic;
    static get HORSE_ONE_CM(): Statistic;
    static get SPRINT_ONE_CM(): Statistic;
    static get CROUCH_ONE_CM(): Statistic;
    static get AVIATE_ONE_CM(): Statistic;
    static get MINE_BLOCK(): Statistic;
    static get USE_ITEM(): Statistic;
    static get BREAK_ITEM(): Statistic;
    static get CRAFT_ITEM(): Statistic;
    static get KILL_ENTITY(): Statistic;
    static get ENTITY_KILLED_BY(): Statistic;
    static get TIME_SINCE_DEATH(): Statistic;
    static get TALKED_TO_VILLAGER(): Statistic;
    static get TRADED_WITH_VILLAGER(): Statistic;
    static get CAKE_SLICES_EATEN(): Statistic;
    static get CAULDRON_FILLED(): Statistic;
    static get CAULDRON_USED(): Statistic;
    static get ARMOR_CLEANED(): Statistic;
    static get BANNER_CLEANED(): Statistic;
    static get BREWINGSTAND_INTERACTION(): Statistic;
    static get BEACON_INTERACTION(): Statistic;
    static get DROPPER_INSPECTED(): Statistic;
    static get HOPPER_INSPECTED(): Statistic;
    static get DISPENSER_INSPECTED(): Statistic;
    static get NOTEBLOCK_PLAYED(): Statistic;
    static get NOTEBLOCK_TUNED(): Statistic;
    static get FLOWER_POTTED(): Statistic;
    static get TRAPPED_CHEST_TRIGGERED(): Statistic;
    static get ENDERCHEST_OPENED(): Statistic;
    static get ITEM_ENCHANTED(): Statistic;
    static get RECORD_PLAYED(): Statistic;
    static get FURNACE_INTERACTION(): Statistic;
    static get CRAFTING_TABLE_INTERACTION(): Statistic;
    static get CHEST_OPENED(): Statistic;
    static get SLEEP_IN_BED(): Statistic;
    static get SHULKER_BOX_OPENED(): Statistic;
    static get TIME_SINCE_REST(): Statistic;
    static get SWIM_ONE_CM(): Statistic;
    static get DAMAGE_DEALT_ABSORBED(): Statistic;
    static get DAMAGE_DEALT_RESISTED(): Statistic;
    static get DAMAGE_BLOCKED_BY_SHIELD(): Statistic;
    static get DAMAGE_ABSORBED(): Statistic;
    static get DAMAGE_RESISTED(): Statistic;
    static get CLEAN_SHULKER_BOX(): Statistic;
    static get OPEN_BARREL(): Statistic;
    static get INTERACT_WITH_BLAST_FURNACE(): Statistic;
    static get INTERACT_WITH_SMOKER(): Statistic;
    static get INTERACT_WITH_LECTERN(): Statistic;
    static get INTERACT_WITH_CAMPFIRE(): Statistic;
    static get INTERACT_WITH_CARTOGRAPHY_TABLE(): Statistic;
    static get INTERACT_WITH_LOOM(): Statistic;
    static get INTERACT_WITH_STONECUTTER(): Statistic;
    static get BELL_RING(): Statistic;
    static get RAID_TRIGGER(): Statistic;
    static get RAID_WIN(): Statistic;
    static get INTERACT_WITH_ANVIL(): Statistic;
    static get INTERACT_WITH_GRINDSTONE(): Statistic;
}
