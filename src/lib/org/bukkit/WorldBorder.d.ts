import Location from '../../org/bukkit/Location.js';
export default interface WorldBorder {
    getSize(): number;
    reset(): void;
    setSize(arg0: number, arg1: number): void;
    setSize(arg0: number): void;
    getCenter(): Location;
    setCenter(arg0: number, arg1: number): void;
    setCenter(arg0: Location): void;
    getDamageBuffer(): number;
    setDamageBuffer(arg0: number): void;
    getDamageAmount(): number;
    setDamageAmount(arg0: number): void;
    getWarningTime(): number;
    setWarningTime(arg0: number): void;
    getWarningDistance(): number;
    setWarningDistance(arg0: number): void;
    isInside(arg0: Location): boolean;
}
export default class WorldBorder {
    static get $javaClass(): any;
}
