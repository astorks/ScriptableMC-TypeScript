declare var Java: any;
import Axis from '../../../../org/bukkit/Axis.js'
import BlockData from '../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../org/bukkit/Material.js'

export default interface Orientable extends BlockData {
	getAxes(): any;
	getAxis(): Axis;
	setAxis(arg0: Axis): void;
	getMaterial(): Material;
	getAsString(arg0: boolean): string;
	getAsString(): string;
	clone(): BlockData;
	clone(): any;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
}

export default class Orientable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Orientable');
	}
}

