declare var Java: any;
import {BlockData} from '../../../org/bukkit/block/data/BlockData.js'
import {MaterialData} from '../../../org/bukkit/material/MaterialData.js'
import {Material} from '../../../org/bukkit/Material.js'

export interface ChunkGenerator$ChunkData {
	getData(arg0: number, arg1: number, arg2: number): number;
	setBlock(arg0: number, arg1: number, arg2: number, arg3: BlockData): void;
	setBlock(arg0: number, arg1: number, arg2: number, arg3: MaterialData): void;
	setBlock(arg0: number, arg1: number, arg2: number, arg3: Material): void;
	getMaxHeight(): number;
	setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: MaterialData): void;
	setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: BlockData): void;
	setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Material): void;
	getTypeAndData(arg0: number, arg1: number, arg2: number): MaterialData;
	getBlockData(arg0: number, arg1: number, arg2: number): BlockData;
	getType(arg0: number, arg1: number, arg2: number): Material;
}

export class ChunkGenerator$ChunkData {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.generator.ChunkGenerator$ChunkData');
	}
}

