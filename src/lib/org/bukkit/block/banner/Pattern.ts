declare var Java: any;
import ConfigurationSerializable from '../../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import DyeColor from '../../../../org/bukkit/DyeColor.js'
import PatternType from '../../../../org/bukkit/block/banner/PatternType.js'

export default interface Pattern extends ConfigurationSerializable {
	getColor(): DyeColor;
	getPattern(): PatternType;
	serialize(): any;
}

export default class Pattern {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.banner.Pattern');
	}

	constructor(map: any);
	constructor(color: DyeColor, pattern: PatternType);
	constructor(...args: any[]) {
		return new Pattern.$javaClass(...args);
	}

}

