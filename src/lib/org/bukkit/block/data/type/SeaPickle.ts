declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js'

export default interface SeaPickle extends Waterlogged {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getMaximumPickles(): number;
	getMinimumPickles(): number;
	getPickles(): number;
	isWaterlogged(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setPickles(arg0: number): void;
	setWaterlogged(arg0: boolean): void;
}

export default class SeaPickle {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.SeaPickle');
	}

}

