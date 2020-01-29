import { LivingEntity } from '../../../org/bukkit/entity/LivingEntity.js';
import { PotionEffectType } from '../../../org/bukkit/potion/PotionEffectType.js';
import { Color } from '../../../org/bukkit/Color.js';
import { ConfigurationSerializable } from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
export interface PotionEffect extends ConfigurationSerializable {
    apply(entity: LivingEntity): boolean;
    getType(): PotionEffectType;
    serialize(): any;
    getColor(): Color;
    isAmbient(): boolean;
    getDuration(): number;
    hasParticles(): boolean;
    hasIcon(): boolean;
    getAmplifier(): number;
}
export declare class PotionEffect {
    static get $javaClass(): any;
    constructor(map: any);
    constructor(type: PotionEffectType, duration: number, amplifier: number);
    constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean);
    constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean, particles: boolean);
    constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean, particles: boolean, icon: boolean);
}
