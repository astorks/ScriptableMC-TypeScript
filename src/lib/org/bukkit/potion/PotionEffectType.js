export default class PotionEffectType {
    static get $javaClass() {
        return Java.type('org.bukkit.potion.PotionEffectType');
    }
    static get SPEED() {
        return PotionEffectType.$javaClass.SPEED;
    }
    static get SLOW() {
        return PotionEffectType.$javaClass.SLOW;
    }
    static get FAST_DIGGING() {
        return PotionEffectType.$javaClass.FAST_DIGGING;
    }
    static get SLOW_DIGGING() {
        return PotionEffectType.$javaClass.SLOW_DIGGING;
    }
    static get INCREASE_DAMAGE() {
        return PotionEffectType.$javaClass.INCREASE_DAMAGE;
    }
    static get HEAL() {
        return PotionEffectType.$javaClass.HEAL;
    }
    static get HARM() {
        return PotionEffectType.$javaClass.HARM;
    }
    static get JUMP() {
        return PotionEffectType.$javaClass.JUMP;
    }
    static get CONFUSION() {
        return PotionEffectType.$javaClass.CONFUSION;
    }
    static get REGENERATION() {
        return PotionEffectType.$javaClass.REGENERATION;
    }
    static get DAMAGE_RESISTANCE() {
        return PotionEffectType.$javaClass.DAMAGE_RESISTANCE;
    }
    static get FIRE_RESISTANCE() {
        return PotionEffectType.$javaClass.FIRE_RESISTANCE;
    }
    static get WATER_BREATHING() {
        return PotionEffectType.$javaClass.WATER_BREATHING;
    }
    static get INVISIBILITY() {
        return PotionEffectType.$javaClass.INVISIBILITY;
    }
    static get BLINDNESS() {
        return PotionEffectType.$javaClass.BLINDNESS;
    }
    static get NIGHT_VISION() {
        return PotionEffectType.$javaClass.NIGHT_VISION;
    }
    static get HUNGER() {
        return PotionEffectType.$javaClass.HUNGER;
    }
    static get WEAKNESS() {
        return PotionEffectType.$javaClass.WEAKNESS;
    }
    static get POISON() {
        return PotionEffectType.$javaClass.POISON;
    }
    static get WITHER() {
        return PotionEffectType.$javaClass.WITHER;
    }
    static get HEALTH_BOOST() {
        return PotionEffectType.$javaClass.HEALTH_BOOST;
    }
    static get ABSORPTION() {
        return PotionEffectType.$javaClass.ABSORPTION;
    }
    static get SATURATION() {
        return PotionEffectType.$javaClass.SATURATION;
    }
    static get GLOWING() {
        return PotionEffectType.$javaClass.GLOWING;
    }
    static get LEVITATION() {
        return PotionEffectType.$javaClass.LEVITATION;
    }
    static get LUCK() {
        return PotionEffectType.$javaClass.LUCK;
    }
    static get UNLUCK() {
        return PotionEffectType.$javaClass.UNLUCK;
    }
    static get SLOW_FALLING() {
        return PotionEffectType.$javaClass.SLOW_FALLING;
    }
    static get CONDUIT_POWER() {
        return PotionEffectType.$javaClass.CONDUIT_POWER;
    }
    static get DOLPHINS_GRACE() {
        return PotionEffectType.$javaClass.DOLPHINS_GRACE;
    }
    static get BAD_OMEN() {
        return PotionEffectType.$javaClass.BAD_OMEN;
    }
    static get HERO_OF_THE_VILLAGE() {
        return PotionEffectType.$javaClass.HERO_OF_THE_VILLAGE;
    }
    static getByName(...args) {
        return PotionEffectType.$javaClass.getByName(...args);
    }
    static getById(...args) {
        return PotionEffectType.$javaClass.getById(...args);
    }
    static registerPotionEffectType(...args) {
        return PotionEffectType.$javaClass.registerPotionEffectType(...args);
    }
    static stopAcceptingRegistrations(...args) {
        return PotionEffectType.$javaClass.stopAcceptingRegistrations(...args);
    }
    static values(...args) {
        return PotionEffectType.$javaClass.values(...args);
    }
}
