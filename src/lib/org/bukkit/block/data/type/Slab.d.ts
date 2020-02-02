import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
import Slab$Type from '../../../../../org/bukkit/block/data/type/Slab$Type.js';
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js';
export default interface Slab extends Waterlogged {
    getType(): Slab$Type;
    setType(arg0: Slab$Type): void;
    isWaterlogged(): boolean;
    setWaterlogged(arg0: boolean): void;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
}
export default class Slab {
    static get $javaClass(): any;
}
