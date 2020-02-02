import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../../../org/bukkit/block/data/Directional.js';
import Lightable from '../../../../../org/bukkit/block/data/Lightable.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface Furnace extends Directional, Lightable {
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
    isLit(): boolean;
    setLit(arg0: boolean): void;
}
export default class Furnace {
    static get $javaClass(): any;
}
