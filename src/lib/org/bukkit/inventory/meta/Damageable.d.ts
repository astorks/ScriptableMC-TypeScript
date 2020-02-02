export default interface Damageable {
    setDamage(arg0: number): void;
    getDamage(): number;
    hasDamage(): boolean;
    clone(): Damageable;
    clone(): any;
}
export default class Damageable {
    static get $javaClass(): any;
}
