declare var Java: any;
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'

export interface BlockChangeDelegate {
	isEmpty(x: number, y: number, z: number): boolean;
	getBlockData(x: number, y: number, z: number): BlockData;
	setBlockData(x: number, y: number, z: number, blockData: BlockData): boolean;
	getHeight(): number;
}

export class BlockChangeDelegate {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.BlockChangeDelegate');
	}
}

