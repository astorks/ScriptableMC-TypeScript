import DyeColor from '../../../org/bukkit/DyeColor.js';
export default interface Colorable {
    setColor(arg0: DyeColor): void;
    getColor(): DyeColor;
}
export default class Colorable {
    static get $javaClass(): any;
}
