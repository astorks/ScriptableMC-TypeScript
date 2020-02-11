import Bisected$Half from '../../../../org/bukkit/block/data/Bisected$Half.js';
import BlockData from '../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../org/bukkit/Material.js';
export default interface Bisected extends BlockData {
    setHalf(arg0: Bisected$Half): void;
    getHalf(): Bisected$Half;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
}
export default class Bisected {
    static get $javaClass(): any;
}
