import DyeColor from '../../../org/bukkit/DyeColor.js';
export default interface Colorable {
    getColor(): DyeColor;
    setColor(arg0: DyeColor): void;
}
export default class Colorable {
    static get $javaClass(): any;
}
