import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../../../org/bukkit/block/data/Directional.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface Piston extends Directional {
    isExtended(): boolean;
    setExtended(arg0: boolean): void;
    getFacing(): BlockFace;
    getFaces(): any;
    setFacing(arg0: BlockFace): void;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
}
export default class Piston {
    static get $javaClass(): any;
}