import BlockData from '../../org/bukkit/block/data/BlockData.js';
export default interface BlockChangeDelegate {
    isEmpty(arg0: number, arg1: number, arg2: number): boolean;
    getHeight(): number;
    setBlockData(arg0: number, arg1: number, arg2: number, arg3: BlockData): boolean;
    getBlockData(arg0: number, arg1: number, arg2: number): BlockData;
}
export default class BlockChangeDelegate {
    static get $javaClass(): any;
}
