import { FireworkEffect } from '../../org/bukkit/FireworkEffect.js';
import { FireworkEffect$Type } from '../../org/bukkit/FireworkEffect$Type.js';
import { Color } from '../../org/bukkit/Color.js';
export interface FireworkEffect$Builder {
    build(): FireworkEffect;
    with(type: FireworkEffect$Type): FireworkEffect$Builder;
    flicker(flicker: boolean): FireworkEffect$Builder;
    withColor(colors: any): FireworkEffect$Builder;
    withColor(color: Color): FireworkEffect$Builder;
    withColor(colors: Array<Color>): FireworkEffect$Builder;
    withFlicker(): FireworkEffect$Builder;
    trail(trail: boolean): FireworkEffect$Builder;
    withFade(color: Color): FireworkEffect$Builder;
    withFade(colors: Array<Color>): FireworkEffect$Builder;
    withFade(colors: any): FireworkEffect$Builder;
    withTrail(): FireworkEffect$Builder;
}
export declare class FireworkEffect$Builder {
    static get $javaClass(): any;
}
