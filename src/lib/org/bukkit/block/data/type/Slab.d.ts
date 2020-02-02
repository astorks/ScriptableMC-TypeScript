import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
import Slab$Type from '../../../../../org/bukkit/block/data/type/Slab$Type.js';
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js';
export default interface Slab extends Waterlogged {
    setType(arg0: Slab$Type): void;
    getType(): Slab$Type;
    setWaterlogged(arg0: boolean): void;
    isWaterlogged(): boolean;
    getMaterial(): Material;
    getAsString(arg0: boolean): string;
    getAsString(): string;
    clone(): BlockData;
    clone(): any;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
}
export default class Slab {
    static get $javaClass(): any;
}
