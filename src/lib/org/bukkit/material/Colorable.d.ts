import { DyeColor } from '../../../org/bukkit/DyeColor.js';
export interface Colorable {
    getColor(): DyeColor;
    setColor(arg0: DyeColor): void;
}
export declare class Colorable {
    static get $javaClass(): any;
}
