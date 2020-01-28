import { Location } from '../../org/bukkit/Location.js';
export interface WorldBorder {
    getCenter(): Location;
    getWarningDistance(): number;
    setCenter(arg0: Location): void;
    setCenter(arg0: number, arg1: number): void;
    getDamageBuffer(): number;
    setDamageBuffer(arg0: number): void;
    getDamageAmount(): number;
    setDamageAmount(arg0: number): void;
    getWarningTime(): number;
    setWarningTime(arg0: number): void;
    setWarningDistance(arg0: number): void;
    isInside(arg0: Location): boolean;
    getSize(): number;
    reset(): void;
    setSize(arg0: number, arg1: number): void;
    setSize(arg0: number): void;
}
export declare class WorldBorder {
    static get $javaClass(): any;
}
