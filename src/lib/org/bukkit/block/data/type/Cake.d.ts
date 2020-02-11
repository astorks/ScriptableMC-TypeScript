import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface Cake extends BlockData {
    setBites(arg0: number): void;
    getMaximumBites(): number;
    getBites(): number;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
}
export default class Cake {
    static get $javaClass(): any;
}
