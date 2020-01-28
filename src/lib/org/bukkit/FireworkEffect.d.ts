import { FireworkEffect$Builder } from '../../org/bukkit/FireworkEffect$Builder.js';
import { ConfigurationSerializable } from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import { FireworkEffect$Type } from '../../org/bukkit/FireworkEffect$Type.js';
export interface FireworkEffect extends ConfigurationSerializable {
    serialize(): any;
    hasFlicker(): boolean;
    hasTrail(): boolean;
    getColors(): any;
    getFadeColors(): any;
    getType(): FireworkEffect$Type;
}
export declare class FireworkEffect {
    static get $javaClass(): any;
    static builder(): FireworkEffect$Builder;
    static deserialize(map: any): ConfigurationSerializable;
}
