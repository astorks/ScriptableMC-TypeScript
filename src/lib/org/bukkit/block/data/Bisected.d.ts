import Bisected$Half from '../../../../org/bukkit/block/data/Bisected$Half.js';
import BlockData from '../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../org/bukkit/Material.js';
export default interface Bisected extends BlockData {
    getHalf(): Bisected$Half;
    setHalf(arg0: Bisected$Half): void;
    getMaterial(): Material;
    getAsString(arg0: boolean): string;
    getAsString(): string;
    clone(): BlockData;
    clone(): any;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
}
export default class Bisected {
    static get $javaClass(): any;
}
