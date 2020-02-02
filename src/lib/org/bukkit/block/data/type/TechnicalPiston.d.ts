import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../../../org/bukkit/block/data/Directional.js';
import Material from '../../../../../org/bukkit/Material.js';
import TechnicalPiston$Type from '../../../../../org/bukkit/block/data/type/TechnicalPiston$Type.js';
export default interface TechnicalPiston extends Directional {
    getType(): TechnicalPiston$Type;
    setType(arg0: TechnicalPiston$Type): void;
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
export default class TechnicalPiston {
    static get $javaClass(): any;
}
