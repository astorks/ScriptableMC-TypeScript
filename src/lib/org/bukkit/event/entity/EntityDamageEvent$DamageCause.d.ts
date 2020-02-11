export default interface EntityDamageEvent$DamageCause {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class EntityDamageEvent$DamageCause {
    static get $javaClass(): any;
    static get CONTACT(): EntityDamageEvent$DamageCause;
    static get ENTITY_ATTACK(): EntityDamageEvent$DamageCause;
    static get ENTITY_SWEEP_ATTACK(): EntityDamageEvent$DamageCause;
    static get PROJECTILE(): EntityDamageEvent$DamageCause;
    static get SUFFOCATION(): EntityDamageEvent$DamageCause;
    static get FALL(): EntityDamageEvent$DamageCause;
    static get FIRE(): EntityDamageEvent$DamageCause;
    static get FIRE_TICK(): EntityDamageEvent$DamageCause;
    static get MELTING(): EntityDamageEvent$DamageCause;
    static get LAVA(): EntityDamageEvent$DamageCause;
    static get DROWNING(): EntityDamageEvent$DamageCause;
    static get BLOCK_EXPLOSION(): EntityDamageEvent$DamageCause;
    static get ENTITY_EXPLOSION(): EntityDamageEvent$DamageCause;
    static get VOID(): EntityDamageEvent$DamageCause;
    static get LIGHTNING(): EntityDamageEvent$DamageCause;
    static get SUICIDE(): EntityDamageEvent$DamageCause;
    static get STARVATION(): EntityDamageEvent$DamageCause;
    static get POISON(): EntityDamageEvent$DamageCause;
    static get MAGIC(): EntityDamageEvent$DamageCause;
    static get WITHER(): EntityDamageEvent$DamageCause;
    static get FALLING_BLOCK(): EntityDamageEvent$DamageCause;
    static get THORNS(): EntityDamageEvent$DamageCause;
    static get DRAGON_BREATH(): EntityDamageEvent$DamageCause;
    static get CUSTOM(): EntityDamageEvent$DamageCause;
    static get FLY_INTO_WALL(): EntityDamageEvent$DamageCause;
    static get HOT_FLOOR(): EntityDamageEvent$DamageCause;
    static get CRAMMING(): EntityDamageEvent$DamageCause;
    static get DRYOUT(): EntityDamageEvent$DamageCause;
}
