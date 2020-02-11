import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Chest$Type from '../../../../../org/bukkit/block/data/type/Chest$Type.js';
import Directional from '../../../../../org/bukkit/block/data/Directional.js';
import Material from '../../../../../org/bukkit/Material.js';
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js';
export default interface Chest extends Directional, Waterlogged {
    getType(): Chest$Type;
    setType(arg0: Chest$Type): void;
    getFacing(): BlockFace;
    setFacing(arg0: BlockFace): void;
    getFaces(): any;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    setWaterlogged(arg0: boolean): void;
    isWaterlogged(): boolean;
}
export default class Chest {
    static get $javaClass(): any;
}
