export default class Registry {
    static get $javaClass() {
        return Java.type('org.bukkit.Registry');
    }
    static get ADVANCEMENT() {
        return Registry.$javaClass.ADVANCEMENT;
    }
    static get ART() {
        return Registry.$javaClass.ART;
    }
    static get BIOME() {
        return Registry.$javaClass.BIOME;
    }
    static get BOSS_BARS() {
        return Registry.$javaClass.BOSS_BARS;
    }
    static get ENCHANTMENT() {
        return Registry.$javaClass.ENCHANTMENT;
    }
    static get ENTITY_TYPE() {
        return Registry.$javaClass.ENTITY_TYPE;
    }
    static get LOOT_TABLES() {
        return Registry.$javaClass.LOOT_TABLES;
    }
    static get MATERIAL() {
        return Registry.$javaClass.MATERIAL;
    }
    static get STATISTIC() {
        return Registry.$javaClass.STATISTIC;
    }
    static get VILLAGER_PROFESSION() {
        return Registry.$javaClass.VILLAGER_PROFESSION;
    }
    static get VILLAGER_TYPE() {
        return Registry.$javaClass.VILLAGER_TYPE;
    }
    static get MEMORY_MODULE_TYPE() {
        return Registry.$javaClass.MEMORY_MODULE_TYPE;
    }
}
