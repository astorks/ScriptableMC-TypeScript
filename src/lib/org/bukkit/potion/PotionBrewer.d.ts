import PotionEffect from '../../../org/bukkit/potion/PotionEffect.js';
import PotionEffectType from '../../../org/bukkit/potion/PotionEffectType.js';
import PotionType from '../../../org/bukkit/potion/PotionType.js';
export default interface PotionBrewer {
    createEffect(arg0: PotionEffectType, arg1: number, arg2: number): PotionEffect;
    getEffectsFromDamage(arg0: number): any;
    getEffects(arg0: PotionType, arg1: boolean, arg2: boolean): any;
}
export default class PotionBrewer {
    static get $javaClass(): any;
}