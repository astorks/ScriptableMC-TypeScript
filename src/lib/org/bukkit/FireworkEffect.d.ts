import { FireworkEffect$Builder } from '../../org/bukkit/FireworkEffect$Builder.js';
import { FireworkEffect$Type } from '../../org/bukkit/FireworkEffect$Type.js';
import { ConfigurationSerializable } from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
export interface FireworkEffect extends ConfigurationSerializable {
    getType(): FireworkEffect$Type;
    serialize(): any;
    hasTrail(): boolean;
    hasFlicker(): boolean;
    getFadeColors(): any;
    getColors(): any;
}
export declare class FireworkEffect {
    static get $javaClass(): any;
    static builder(): FireworkEffect$Builder;
    static deserialize(map: any): ConfigurationSerializable;
}
