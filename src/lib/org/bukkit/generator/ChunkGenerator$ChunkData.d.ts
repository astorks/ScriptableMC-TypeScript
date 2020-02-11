import BlockData from '../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface ChunkGenerator$ChunkData {
    getType(arg0: number, arg1: number, arg2: number): Material;
    setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Material): void;
    setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: BlockData): void;
    setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: MaterialData): void;
    getData(arg0: number, arg1: number, arg2: number): number;
    getMaxHeight(): number;
    setBlock(arg0: number, arg1: number, arg2: number, arg3: BlockData): void;
    setBlock(arg0: number, arg1: number, arg2: number, arg3: Material): void;
    setBlock(arg0: number, arg1: number, arg2: number, arg3: MaterialData): void;
    getBlockData(arg0: number, arg1: number, arg2: number): BlockData;
    getTypeAndData(arg0: number, arg1: number, arg2: number): MaterialData;
}
export default class ChunkGenerator$ChunkData {
    static get $javaClass(): any;
}