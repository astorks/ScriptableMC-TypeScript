import Color from '../../org/bukkit/Color.js';
import ConfigurationSerializable from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import FireworkEffect$Builder from '../../org/bukkit/FireworkEffect$Builder.js';
import FireworkEffect$Type from '../../org/bukkit/FireworkEffect$Type.js';
export default interface FireworkEffect extends ConfigurationSerializable {
    getType(): FireworkEffect$Type;
    serialize(): any;
    hasFlicker(): boolean;
    getColors(): Array<Color>;
    hasTrail(): boolean;
    getFadeColors(): Array<Color>;
}
export default class FireworkEffect {
    static get $javaClass(): any;
    static builder(): FireworkEffect$Builder;
    static deserialize(map: any): ConfigurationSerializable;
}
