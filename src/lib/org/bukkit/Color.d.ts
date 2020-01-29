import { DyeColor } from '../../org/bukkit/DyeColor.js';
import { ConfigurationSerializable } from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
export interface Color extends ConfigurationSerializable {
    serialize(): any;
    setRed(red: number): Color;
    getGreen(): number;
    getRed(): number;
    getBlue(): number;
    asRGB(): number;
    asBGR(): number;
    mixColors(colors: Array<Color>): Color;
    setBlue(blue: number): Color;
    setGreen(green: number): Color;
    mixDyes(colors: Array<DyeColor>): Color;
}
export declare class Color {
    static get $javaClass(): any;
    static get WHITE(): Color;
    static get SILVER(): Color;
    static get GRAY(): Color;
    static get BLACK(): Color;
    static get RED(): Color;
    static get MAROON(): Color;
    static get YELLOW(): Color;
    static get OLIVE(): Color;
    static get LIME(): Color;
    static get GREEN(): Color;
    static get AQUA(): Color;
    static get TEAL(): Color;
    static get BLUE(): Color;
    static get NAVY(): Color;
    static get FUCHSIA(): Color;
    static get PURPLE(): Color;
    static get ORANGE(): Color;
    static deserialize(map: any): Color;
    static fromRGB(red: number, green: number, blue: number): Color;
    static fromRGB(rgb: number): Color;
    static fromBGR(bgr: number): Color;
    static fromBGR(blue: number, green: number, red: number): Color;
}
