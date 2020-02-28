declare var Java: any;
import PotionEffect from './PotionEffect.js'
import PotionEffectType from './PotionEffectType.js'
import PotionType from './PotionType.js'

export default interface PotionBrewer {
	createEffect(arg0: PotionEffectType, arg1: number, arg2: number): PotionEffect;
	getEffects(arg0: PotionType, arg1: boolean, arg2: boolean): Array<PotionEffect>;
	getEffectsFromDamage(arg0: number): Array<PotionEffect>;
}

export default class PotionBrewer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.potion.PotionBrewer');
	}

}

