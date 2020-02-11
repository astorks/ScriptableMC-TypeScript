export default interface Damageable {
    clone(): any;
    clone(): Damageable;
    getDamage(): number;
    setDamage(arg0: number): void;
    hasDamage(): boolean;
}
export default class Damageable {
    static get $javaClass(): any;
}
