import ConfigurationSerializable from '../../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import DyeColor from '../../../../org/bukkit/DyeColor.js';
import PatternType from '../../../../org/bukkit/block/banner/PatternType.js';
export default interface Pattern extends ConfigurationSerializable {
    getPattern(): PatternType;
    getColor(): DyeColor;
    serialize(): any;
}
export default class Pattern {
    static get $javaClass(): any;
    constructor(color: DyeColor, pattern: PatternType);
    constructor(map: any);
}
