export default interface Damageable {
    clone(): any;
    clone(): Damageable;
    setDamage(arg0: number): void;
    getDamage(): number;
    hasDamage(): boolean;
}
export default class Damageable {
    static get $javaClass(): any;
}
