import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Material from '../../../../../org/bukkit/Material.js';
import TechnicalPiston from '../../../../../org/bukkit/block/data/type/TechnicalPiston.js';
import TechnicalPiston$Type from '../../../../../org/bukkit/block/data/type/TechnicalPiston$Type.js';
export default interface PistonHead extends TechnicalPiston {
    setShort(arg0: boolean): void;
    isShort(): boolean;
    getType(): TechnicalPiston$Type;
    setType(arg0: TechnicalPiston$Type): void;
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
}
export default class PistonHead {
    static get $javaClass(): any;
}
