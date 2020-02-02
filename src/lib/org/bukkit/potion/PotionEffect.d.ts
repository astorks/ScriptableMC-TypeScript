import Color from '../../../org/bukkit/Color.js';
import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import LivingEntity from '../../../org/bukkit/entity/LivingEntity.js';
import PotionEffectType from '../../../org/bukkit/potion/PotionEffectType.js';
export default interface PotionEffect extends ConfigurationSerializable {
    getColor(): Color;
    serialize(): any;
    getAmplifier(): number;
    getDuration(): number;
    isAmbient(): boolean;
    hasParticles(): boolean;
    hasIcon(): boolean;
    apply(entity: LivingEntity): boolean;
    getType(): PotionEffectType;
}
export default class PotionEffect {
    static get $javaClass(): any;
    constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean, particles: boolean, icon: boolean);
    constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean, particles: boolean);
    constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean);
    constructor(map: any);
    constructor(type: PotionEffectType, duration: number, amplifier: number);
}
