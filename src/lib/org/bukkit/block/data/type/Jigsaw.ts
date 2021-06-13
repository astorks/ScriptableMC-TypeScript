declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Jigsaw$Orientation from './Jigsaw$Orientation.js'
import Material from '../../../../../org/bukkit/Material.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'

export default interface Jigsaw extends BlockData {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getOrientation(): Jigsaw$Orientation;
	getSoundGroup(): SoundGroup;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setOrientation(arg0: Jigsaw$Orientation): void;
}

export default class Jigsaw {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Jigsaw');
	}

}

