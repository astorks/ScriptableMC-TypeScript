import BlockData from '../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import Material from '../../../../org/bukkit/Material.js';
export default interface Rotatable extends BlockData {
    setRotation(arg0: BlockFace): void;
    getRotation(): BlockFace;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
}
export default class Rotatable {
    static get $javaClass(): any;
}
