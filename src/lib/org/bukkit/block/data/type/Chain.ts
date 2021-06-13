declare var Java: any;
import Axis from '../../../../../org/bukkit/Axis.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'
import Orientable from '../../../../../org/bukkit/block/data/Orientable.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js'

export default interface Chain extends Orientable, Waterlogged {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getAxes(): any;
	getAxis(): Axis;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	isWaterlogged(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setAxis(arg0: Axis): void;
	setWaterlogged(arg0: boolean): void;
}

export default class Chain {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Chain');
	}

}

