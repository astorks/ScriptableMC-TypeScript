declare var Java: any;
import Axis from '../../../../org/bukkit/Axis.js'
import BlockData from './BlockData.js'
import Material from '../../../../org/bukkit/Material.js'
import SoundGroup from '../../../../org/bukkit/SoundGroup.js'

export default interface Orientable extends BlockData {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getAxes(): any;
	getAxis(): Axis;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setAxis(arg0: Axis): void;
}

export default class Orientable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Orientable');
	}

}

