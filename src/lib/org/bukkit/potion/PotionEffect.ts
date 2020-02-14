declare var Java: any;
import Color from '../../../org/bukkit/Color.js'
import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import LivingEntity from '../../../org/bukkit/entity/LivingEntity.js'
import PotionEffectType from '../../../org/bukkit/potion/PotionEffectType.js'

export default interface PotionEffect extends ConfigurationSerializable {
	getDuration(): number;
	serialize(): any;
	getColor(): Color;
	getAmplifier(): number;
	isAmbient(): boolean;
	hasParticles(): boolean;
	hasIcon(): boolean;
	apply(entity: LivingEntity): boolean;
	getType(): PotionEffectType;
}

export default class PotionEffect {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.potion.PotionEffect');
	}
	constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean, particles: boolean, icon: boolean);
	constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean, particles: boolean);
	constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean);
	constructor(map: any);
	constructor(type: PotionEffectType, duration: number, amplifier: number);
	constructor(...args: any[]) {
		return new PotionEffect.$javaClass(...args);
	}
}

