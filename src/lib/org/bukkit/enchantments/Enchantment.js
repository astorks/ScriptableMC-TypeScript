export default class Enchantment {
    static get $javaClass() {
        return Java.type('org.bukkit.enchantments.Enchantment');
    }
    constructor(...args) {
        return new Enchantment.$javaClass(...args);
    }
    static get PROTECTION_ENVIRONMENTAL() {
        return Enchantment.$javaClass.PROTECTION_ENVIRONMENTAL;
    }
    static get PROTECTION_FIRE() {
        return Enchantment.$javaClass.PROTECTION_FIRE;
    }
    static get PROTECTION_FALL() {
        return Enchantment.$javaClass.PROTECTION_FALL;
    }
    static get PROTECTION_EXPLOSIONS() {
        return Enchantment.$javaClass.PROTECTION_EXPLOSIONS;
    }
    static get PROTECTION_PROJECTILE() {
        return Enchantment.$javaClass.PROTECTION_PROJECTILE;
    }
    static get OXYGEN() {
        return Enchantment.$javaClass.OXYGEN;
    }
    static get WATER_WORKER() {
        return Enchantment.$javaClass.WATER_WORKER;
    }
    static get THORNS() {
        return Enchantment.$javaClass.THORNS;
    }
    static get DEPTH_STRIDER() {
        return Enchantment.$javaClass.DEPTH_STRIDER;
    }
    static get FROST_WALKER() {
        return Enchantment.$javaClass.FROST_WALKER;
    }
    static get BINDING_CURSE() {
        return Enchantment.$javaClass.BINDING_CURSE;
    }
    static get DAMAGE_ALL() {
        return Enchantment.$javaClass.DAMAGE_ALL;
    }
    static get DAMAGE_UNDEAD() {
        return Enchantment.$javaClass.DAMAGE_UNDEAD;
    }
    static get DAMAGE_ARTHROPODS() {
        return Enchantment.$javaClass.DAMAGE_ARTHROPODS;
    }
    static get KNOCKBACK() {
        return Enchantment.$javaClass.KNOCKBACK;
    }
    static get FIRE_ASPECT() {
        return Enchantment.$javaClass.FIRE_ASPECT;
    }
    static get LOOT_BONUS_MOBS() {
        return Enchantment.$javaClass.LOOT_BONUS_MOBS;
    }
    static get SWEEPING_EDGE() {
        return Enchantment.$javaClass.SWEEPING_EDGE;
    }
    static get DIG_SPEED() {
        return Enchantment.$javaClass.DIG_SPEED;
    }
    static get SILK_TOUCH() {
        return Enchantment.$javaClass.SILK_TOUCH;
    }
    static get DURABILITY() {
        return Enchantment.$javaClass.DURABILITY;
    }
    static get LOOT_BONUS_BLOCKS() {
        return Enchantment.$javaClass.LOOT_BONUS_BLOCKS;
    }
    static get ARROW_DAMAGE() {
        return Enchantment.$javaClass.ARROW_DAMAGE;
    }
    static get ARROW_KNOCKBACK() {
        return Enchantment.$javaClass.ARROW_KNOCKBACK;
    }
    static get ARROW_FIRE() {
        return Enchantment.$javaClass.ARROW_FIRE;
    }
    static get ARROW_INFINITE() {
        return Enchantment.$javaClass.ARROW_INFINITE;
    }
    static get LUCK() {
        return Enchantment.$javaClass.LUCK;
    }
    static get LURE() {
        return Enchantment.$javaClass.LURE;
    }
    static get LOYALTY() {
        return Enchantment.$javaClass.LOYALTY;
    }
    static get IMPALING() {
        return Enchantment.$javaClass.IMPALING;
    }
    static get RIPTIDE() {
        return Enchantment.$javaClass.RIPTIDE;
    }
    static get CHANNELING() {
        return Enchantment.$javaClass.CHANNELING;
    }
    static get MULTISHOT() {
        return Enchantment.$javaClass.MULTISHOT;
    }
    static get QUICK_CHARGE() {
        return Enchantment.$javaClass.QUICK_CHARGE;
    }
    static get PIERCING() {
        return Enchantment.$javaClass.PIERCING;
    }
    static get MENDING() {
        return Enchantment.$javaClass.MENDING;
    }
    static get VANISHING_CURSE() {
        return Enchantment.$javaClass.VANISHING_CURSE;
    }
    static getByName(...args) {
        return Enchantment.$javaClass.getByName(...args);
    }
    static getByKey(...args) {
        return Enchantment.$javaClass.getByKey(...args);
    }
    static stopAcceptingRegistrations(...args) {
        return Enchantment.$javaClass.stopAcceptingRegistrations(...args);
    }
    static registerEnchantment(...args) {
        return Enchantment.$javaClass.registerEnchantment(...args);
    }
    static isAcceptingRegistrations(...args) {
        return Enchantment.$javaClass.isAcceptingRegistrations(...args);
    }
    static values(...args) {
        return Enchantment.$javaClass.values(...args);
    }
}
