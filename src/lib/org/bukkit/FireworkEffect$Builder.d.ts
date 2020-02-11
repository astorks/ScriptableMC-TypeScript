import Color from '../../org/bukkit/Color.js';
import FireworkEffect from '../../org/bukkit/FireworkEffect.js';
import FireworkEffect$Type from '../../org/bukkit/FireworkEffect$Type.js';
export default interface FireworkEffect$Builder {
    build(): FireworkEffect;
    with(type: FireworkEffect$Type): FireworkEffect$Builder;
    withFade(color: Color): FireworkEffect$Builder;
    withFade(colors: any): FireworkEffect$Builder;
    withFade(colors: Array<Color>): FireworkEffect$Builder;
    withFlicker(): FireworkEffect$Builder;
    withTrail(): FireworkEffect$Builder;
    trail(trail: boolean): FireworkEffect$Builder;
    withColor(color: Color): FireworkEffect$Builder;
    withColor(colors: any): FireworkEffect$Builder;
    withColor(colors: Array<Color>): FireworkEffect$Builder;
    flicker(flicker: boolean): FireworkEffect$Builder;
}
export default class FireworkEffect$Builder {
    static get $javaClass(): any;
}
