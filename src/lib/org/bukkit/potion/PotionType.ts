declare var Java: any;
import PotionEffectType from '../../../org/bukkit/potion/PotionEffectType.js'

export default interface PotionType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	getEffectType(): PotionEffectType;
	getMaxLevel(): number;
	isExtendable(): boolean;
	isInstant(): boolean;
	isUpgradeable(): boolean;
	name(): string;
	ordinal(): number;
}

export default class PotionType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.potion.PotionType');
	}

	public static get AWKWARD(): PotionType {
		return this.$javaClass.AWKWARD;
	}
	public static get FIRE_RESISTANCE(): PotionType {
		return this.$javaClass.FIRE_RESISTANCE;
	}
	public static get INSTANT_DAMAGE(): PotionType {
		return this.$javaClass.INSTANT_DAMAGE;
	}
	public static get INSTANT_HEAL(): PotionType {
		return this.$javaClass.INSTANT_HEAL;
	}
	public static get INVISIBILITY(): PotionType {
		return this.$javaClass.INVISIBILITY;
	}
	public static get JUMP(): PotionType {
		return this.$javaClass.JUMP;
	}
	public static get LUCK(): PotionType {
		return this.$javaClass.LUCK;
	}
	public static get MUNDANE(): PotionType {
		return this.$javaClass.MUNDANE;
	}
	public static get NIGHT_VISION(): PotionType {
		return this.$javaClass.NIGHT_VISION;
	}
	public static get POISON(): PotionType {
		return this.$javaClass.POISON;
	}
	public static get REGEN(): PotionType {
		return this.$javaClass.REGEN;
	}
	public static get SLOWNESS(): PotionType {
		return this.$javaClass.SLOWNESS;
	}
	public static get SLOW_FALLING(): PotionType {
		return this.$javaClass.SLOW_FALLING;
	}
	public static get SPEED(): PotionType {
		return this.$javaClass.SPEED;
	}
	public static get STRENGTH(): PotionType {
		return this.$javaClass.STRENGTH;
	}
	public static get THICK(): PotionType {
		return this.$javaClass.THICK;
	}
	public static get TURTLE_MASTER(): PotionType {
		return this.$javaClass.TURTLE_MASTER;
	}
	public static get UNCRAFTABLE(): PotionType {
		return this.$javaClass.UNCRAFTABLE;
	}
	public static get WATER(): PotionType {
		return this.$javaClass.WATER;
	}
	public static get WATER_BREATHING(): PotionType {
		return this.$javaClass.WATER_BREATHING;
	}
	public static get WEAKNESS(): PotionType {
		return this.$javaClass.WEAKNESS;
	}
}

