import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface Sapling extends BlockData {
    getStage(): number;
    setStage(arg0: number): void;
    getMaximumStage(): number;
    getMaterial(): Material;
    getAsString(arg0: boolean): string;
    getAsString(): string;
    clone(): BlockData;
    clone(): any;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
}
export default class Sapling {
    static get $javaClass(): any;
}
