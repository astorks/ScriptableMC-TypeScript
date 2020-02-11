export default interface EntityEffect {
    getApplicable(): any;
    getData(): number;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class EntityEffect {
    static get $javaClass(): any;
    static get ARROW_PARTICLES(): EntityEffect;
    static get RABBIT_JUMP(): EntityEffect;
    static get HURT(): EntityEffect;
    static get DEATH(): EntityEffect;
    static get WOLF_SMOKE(): EntityEffect;
    static get WOLF_HEARTS(): EntityEffect;
    static get WOLF_SHAKE(): EntityEffect;
    static get SHEEP_EAT(): EntityEffect;
    static get IRON_GOLEM_ROSE(): EntityEffect;
    static get VILLAGER_HEART(): EntityEffect;
    static get VILLAGER_ANGRY(): EntityEffect;
    static get VILLAGER_HAPPY(): EntityEffect;
    static get WITCH_MAGIC(): EntityEffect;
    static get ZOMBIE_TRANSFORM(): EntityEffect;
    static get FIREWORK_EXPLODE(): EntityEffect;
    static get LOVE_HEARTS(): EntityEffect;
    static get SQUID_ROTATE(): EntityEffect;
    static get ENTITY_POOF(): EntityEffect;
    static get GUARDIAN_TARGET(): EntityEffect;
    static get SHIELD_BLOCK(): EntityEffect;
    static get SHIELD_BREAK(): EntityEffect;
    static get ARMOR_STAND_HIT(): EntityEffect;
    static get THORNS_HURT(): EntityEffect;
    static get IRON_GOLEM_SHEATH(): EntityEffect;
    static get TOTEM_RESURRECT(): EntityEffect;
    static get HURT_DROWN(): EntityEffect;
    static get HURT_EXPLOSION(): EntityEffect;
}
