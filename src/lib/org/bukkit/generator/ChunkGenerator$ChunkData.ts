declare var Java: any;
import BlockData from '../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface ChunkGenerator$ChunkData {
	getBlockData(arg0: number, arg1: number, arg2: number): BlockData;
	getData(arg0: number, arg1: number, arg2: number): number;
	getMaxHeight(): number;
	getType(arg0: number, arg1: number, arg2: number): Material;
	getTypeAndData(arg0: number, arg1: number, arg2: number): MaterialData;
	setBlock(arg0: number, arg1: number, arg2: number, arg3: BlockData): void;
	setBlock(arg0: number, arg1: number, arg2: number, arg3: Material): void;
	setBlock(arg0: number, arg1: number, arg2: number, arg3: MaterialData): void;
	setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Material): void;
	setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: BlockData): void;
	setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: MaterialData): void;
}

export default class ChunkGenerator$ChunkData {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.generator.ChunkGenerator$ChunkData');
	}

}

