import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Material from '../../../../../org/bukkit/Material.js';
import MultipleFacing from '../../../../../org/bukkit/block/data/MultipleFacing.js';
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js';
export default interface Fence extends MultipleFacing, Waterlogged {
    getFaces(): any;
    hasFace(arg0: BlockFace): boolean;
    setFace(arg0: BlockFace, arg1: boolean): void;
    getAllowedFaces(): any;
    getMaterial(): Material;
    getAsString(arg0: boolean): string;
    getAsString(): string;
    clone(): BlockData;
    clone(): any;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setWaterlogged(arg0: boolean): void;
    isWaterlogged(): boolean;
}
export default class Fence {
    static get $javaClass(): any;
}
