declare var Java: any;
import PotionEffect from '../../../org/bukkit/potion/PotionEffect.js'
import PotionEffectType from '../../../org/bukkit/potion/PotionEffectType.js'
import PotionType from '../../../org/bukkit/potion/PotionType.js'

export default interface PotionBrewer {
	createEffect(arg0: PotionEffectType, arg1: number, arg2: number): PotionEffect;
	getEffects(arg0: PotionType, arg1: boolean, arg2: boolean): any;
	getEffectsFromDamage(arg0: number): any;
}

export default class PotionBrewer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.potion.PotionBrewer');
	}

}

