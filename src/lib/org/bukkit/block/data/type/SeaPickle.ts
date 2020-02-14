declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js'

export default interface SeaPickle extends Waterlogged {
	setPickles(arg0: number): void;
	getMinimumPickles(): number;
	getMaximumPickles(): number;
	getPickles(): number;
	isWaterlogged(): boolean;
	setWaterlogged(arg0: boolean): void;
	getMaterial(): Material;
	getAsString(arg0: boolean): string;
	getAsString(): string;
	clone(): BlockData;
	clone(): any;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
}

export default class SeaPickle {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.SeaPickle');
	}
}

