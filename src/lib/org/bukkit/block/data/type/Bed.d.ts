import Bed$Part from '../../../../../org/bukkit/block/data/type/Bed$Part.js';
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../../../org/bukkit/block/data/Directional.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface Bed extends Directional {
    setPart(arg0: Bed$Part): void;
    isOccupied(): boolean;
    getPart(): Bed$Part;
    getFacing(): BlockFace;
    setFacing(arg0: BlockFace): void;
    getFaces(): any;
    getMaterial(): Material;
    getAsString(arg0: boolean): string;
    getAsString(): string;
    clone(): BlockData;
    clone(): any;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
}
export default class Bed {
    static get $javaClass(): any;
}
