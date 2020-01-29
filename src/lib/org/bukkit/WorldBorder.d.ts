import { Location } from '../../org/bukkit/Location.js';
export interface WorldBorder {
    getSize(): number;
    reset(): void;
    setSize(arg0: number, arg1: number): void;
    setSize(arg0: number): void;
    getCenter(): Location;
    getDamageBuffer(): number;
    setCenter(arg0: number, arg1: number): void;
    setCenter(arg0: Location): void;
    isInside(arg0: Location): boolean;
    setDamageBuffer(arg0: number): void;
    getWarningDistance(): number;
    getWarningTime(): number;
    setWarningDistance(arg0: number): void;
    getDamageAmount(): number;
    setDamageAmount(arg0: number): void;
    setWarningTime(arg0: number): void;
}
export declare class WorldBorder {
    static get $javaClass(): any;
}
