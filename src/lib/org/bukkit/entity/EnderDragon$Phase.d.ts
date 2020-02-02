export default interface EnderDragon$Phase {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class EnderDragon$Phase {
    static get $javaClass(): any;
    static get CIRCLING(): EnderDragon$Phase;
    static get STRAFING(): EnderDragon$Phase;
    static get FLY_TO_PORTAL(): EnderDragon$Phase;
    static get LAND_ON_PORTAL(): EnderDragon$Phase;
    static get LEAVE_PORTAL(): EnderDragon$Phase;
    static get BREATH_ATTACK(): EnderDragon$Phase;
    static get SEARCH_FOR_BREATH_ATTACK_TARGET(): EnderDragon$Phase;
    static get ROAR_BEFORE_ATTACK(): EnderDragon$Phase;
    static get CHARGE_PLAYER(): EnderDragon$Phase;
    static get DYING(): EnderDragon$Phase;
    static get HOVER(): EnderDragon$Phase;
}
