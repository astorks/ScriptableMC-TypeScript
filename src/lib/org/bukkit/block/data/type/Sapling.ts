declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'

export default interface Sapling extends BlockData {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getMaximumStage(): number;
	getSoundGroup(): SoundGroup;
	getStage(): number;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setStage(arg0: number): void;
}

export default class Sapling {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Sapling');
	}

}

