export interface EntityDamageEvent$DamageModifier {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class EntityDamageEvent$DamageModifier {
    static get $javaClass(): any;
    static get BASE(): EntityDamageEvent$DamageModifier;
    static get HARD_HAT(): EntityDamageEvent$DamageModifier;
    static get BLOCKING(): EntityDamageEvent$DamageModifier;
    static get ARMOR(): EntityDamageEvent$DamageModifier;
    static get RESISTANCE(): EntityDamageEvent$DamageModifier;
    static get MAGIC(): EntityDamageEvent$DamageModifier;
    static get ABSORPTION(): EntityDamageEvent$DamageModifier;
}
