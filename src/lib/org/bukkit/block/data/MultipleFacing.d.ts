import BlockData from '../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import Material from '../../../../org/bukkit/Material.js';
export default interface MultipleFacing extends BlockData {
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
}
export default class MultipleFacing {
    static get $javaClass(): any;
}
