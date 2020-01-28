export interface Attribute {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class Attribute {
    static get $javaClass(): any;
    static get GENERIC_MAX_HEALTH(): Attribute;
    static get GENERIC_FOLLOW_RANGE(): Attribute;
    static get GENERIC_KNOCKBACK_RESISTANCE(): Attribute;
    static get GENERIC_MOVEMENT_SPEED(): Attribute;
    static get GENERIC_FLYING_SPEED(): Attribute;
    static get GENERIC_ATTACK_DAMAGE(): Attribute;
    static get GENERIC_ATTACK_SPEED(): Attribute;
    static get GENERIC_ARMOR(): Attribute;
    static get GENERIC_ARMOR_TOUGHNESS(): Attribute;
    static get GENERIC_LUCK(): Attribute;
    static get HORSE_JUMP_STRENGTH(): Attribute;
    static get ZOMBIE_SPAWN_REINFORCEMENTS(): Attribute;
}
