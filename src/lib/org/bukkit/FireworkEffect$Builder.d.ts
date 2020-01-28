import { FireworkEffect } from '../../org/bukkit/FireworkEffect.js';
import { Color } from '../../org/bukkit/Color.js';
import { FireworkEffect$Type } from '../../org/bukkit/FireworkEffect$Type.js';
export interface FireworkEffect$Builder {
    build(): FireworkEffect;
    flicker(flicker: boolean): FireworkEffect$Builder;
    trail(trail: boolean): FireworkEffect$Builder;
    withColor(colors: Array<Color>): FireworkEffect$Builder;
    withColor(color: Color): FireworkEffect$Builder;
    withColor(colors: any): FireworkEffect$Builder;
    withFade(colors: any): FireworkEffect$Builder;
    withFade(colors: Array<Color>): FireworkEffect$Builder;
    withFade(color: Color): FireworkEffect$Builder;
    with(type: FireworkEffect$Type): FireworkEffect$Builder;
    withFlicker(): FireworkEffect$Builder;
    withTrail(): FireworkEffect$Builder;
}
export declare class FireworkEffect$Builder {
    static get $javaClass(): any;
}
