declare var Java: any;
import Color from '../../../org/bukkit/Color.js'
import PotionEffect from '../../../org/bukkit/potion/PotionEffect.js'
import PotionEffectType from '../../../org/bukkit/potion/PotionEffectType.js'

export default interface PotionEffectTypeWrapper extends PotionEffectType {
	createEffect(duration: number, amplifier: number): PotionEffect;
	getColor(): Color;
	getDurationModifier(): number;
	getId(): number;
	getName(): string;
	getType(): PotionEffectType;
	isInstant(): boolean;
}

export default class PotionEffectTypeWrapper {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.potion.PotionEffectTypeWrapper');
	}

	public static get ABSORPTION(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.ABSORPTION;
	}

	public static get BAD_OMEN(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.BAD_OMEN;
	}

	public static get BLINDNESS(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.BLINDNESS;
	}

	public static get CONDUIT_POWER(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.CONDUIT_POWER;
	}

	public static get CONFUSION(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.CONFUSION;
	}

	public static get DAMAGE_RESISTANCE(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.DAMAGE_RESISTANCE;
	}

	public static get DOLPHINS_GRACE(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.DOLPHINS_GRACE;
	}

	public static get FAST_DIGGING(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.FAST_DIGGING;
	}

	public static get FIRE_RESISTANCE(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.FIRE_RESISTANCE;
	}

	public static get GLOWING(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.GLOWING;
	}

	public static get HARM(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.HARM;
	}

	public static get HEAL(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.HEAL;
	}

	public static get HEALTH_BOOST(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.HEALTH_BOOST;
	}

	public static get HERO_OF_THE_VILLAGE(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.HERO_OF_THE_VILLAGE;
	}

	public static get HUNGER(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.HUNGER;
	}

	public static get INCREASE_DAMAGE(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.INCREASE_DAMAGE;
	}

	public static get INVISIBILITY(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.INVISIBILITY;
	}

	public static get JUMP(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.JUMP;
	}

	public static get LEVITATION(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.LEVITATION;
	}

	public static get LUCK(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.LUCK;
	}

	public static get NIGHT_VISION(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.NIGHT_VISION;
	}

	public static get POISON(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.POISON;
	}

	public static get REGENERATION(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.REGENERATION;
	}

	public static get SATURATION(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.SATURATION;
	}

	public static get SLOW(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.SLOW;
	}

	public static get SLOW_DIGGING(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.SLOW_DIGGING;
	}

	public static get SLOW_FALLING(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.SLOW_FALLING;
	}

	public static get SPEED(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.SPEED;
	}

	public static get UNLUCK(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.UNLUCK;
	}

	public static get WATER_BREATHING(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.WATER_BREATHING;
	}

	public static get WEAKNESS(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.WEAKNESS;
	}

	public static get WITHER(): PotionEffectType {
		return PotionEffectTypeWrapper.$javaClass.WITHER;
	}

	public static getById(id: number): PotionEffectType;
	public static getById(...args: any[]): any {
		return PotionEffectTypeWrapper.$javaClass.getById(...args);
	}

	public static getByName(_name: string): PotionEffectType;
	public static getByName(...args: any[]): any {
		return PotionEffectTypeWrapper.$javaClass.getByName(...args);
	}

	public static registerPotionEffectType(type: PotionEffectType): void;
	public static registerPotionEffectType(...args: any[]): any {
		return PotionEffectTypeWrapper.$javaClass.registerPotionEffectType(...args);
	}

	public static stopAcceptingRegistrations(): void;
	public static stopAcceptingRegistrations(...args: any[]): any {
		return PotionEffectTypeWrapper.$javaClass.stopAcceptingRegistrations(...args);
	}

	public static values(): Array<PotionEffectType>;
	public static values(...args: any[]): any {
		return PotionEffectTypeWrapper.$javaClass.values(...args);
	}

}

