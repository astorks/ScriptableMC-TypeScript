import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Material from '../../../../../org/bukkit/Material.js';
import MultipleFacing from '../../../../../org/bukkit/block/data/MultipleFacing.js';
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js';
export default interface GlassPane extends MultipleFacing, Waterlogged {
    getFaces(): any;
    hasFace(arg0: BlockFace): boolean;
    getAllowedFaces(): any;
    setFace(arg0: BlockFace, arg1: boolean): void;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    isWaterlogged(): boolean;
    setWaterlogged(arg0: boolean): void;
}
export default class GlassPane {
    static get $javaClass(): any;
}
