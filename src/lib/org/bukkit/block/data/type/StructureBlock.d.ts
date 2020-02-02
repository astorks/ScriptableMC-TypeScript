import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
import StructureBlock$Mode from '../../../../../org/bukkit/block/data/type/StructureBlock$Mode.js';
export default interface StructureBlock extends BlockData {
    getMode(): StructureBlock$Mode;
    setMode(arg0: StructureBlock$Mode): void;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
}
export default class StructureBlock {
    static get $javaClass(): any;
}
