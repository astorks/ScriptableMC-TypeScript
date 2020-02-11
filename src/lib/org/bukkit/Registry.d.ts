import Keyed from '../../org/bukkit/Keyed.js';
import NamespacedKey from '../../org/bukkit/NamespacedKey.js';
export default interface Registry {
    get(arg0: NamespacedKey): Keyed;
    iterator(): any;
    spliterator(): any;
    forEach(action: any): void;
}
export default class Registry {
    static get $javaClass(): any;
    static get ADVANCEMENT(): Registry;
    static get ART(): Registry;
    static get BIOME(): Registry;
    static get BOSS_BARS(): Registry;
    static get ENCHANTMENT(): Registry;
    static get ENTITY_TYPE(): Registry;
    static get LOOT_TABLES(): Registry;
    static get MATERIAL(): Registry;
    static get STATISTIC(): Registry;
    static get VILLAGER_PROFESSION(): Registry;
    static get VILLAGER_TYPE(): Registry;
    static get MEMORY_MODULE_TYPE(): Registry;
}
