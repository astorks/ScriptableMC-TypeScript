declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Levelled from '../../../../../org/bukkit/block/data/Levelled.js'
import Material from '../../../../../org/bukkit/Material.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js'

export default interface Light extends Levelled, Waterlogged {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getLevel(): number;
	getMaterial(): Material;
	getMaximumLevel(): number;
	getSoundGroup(): SoundGroup;
	isWaterlogged(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setLevel(arg0: number): void;
	setWaterlogged(arg0: boolean): void;
}

export default class Light {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Light');
	}

}

