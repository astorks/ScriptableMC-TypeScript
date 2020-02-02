import Color from '../../../org/bukkit/Color.js';
import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import LivingEntity from '../../../org/bukkit/entity/LivingEntity.js';
import PotionEffectType from '../../../org/bukkit/potion/PotionEffectType.js';
export default interface PotionEffect extends ConfigurationSerializable {
    apply(entity: LivingEntity): boolean;
    getType(): PotionEffectType;
    serialize(): any;
    isAmbient(): boolean;
    hasParticles(): boolean;
    getDuration(): number;
    getAmplifier(): number;
    hasIcon(): boolean;
    getColor(): Color;
}
export default class PotionEffect {
    static get $javaClass(): any;
    constructor(map: any);
    constructor(type: PotionEffectType, duration: number, amplifier: number);
    constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean);
    constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean, particles: boolean);
    constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean, particles: boolean, icon: boolean);
}
