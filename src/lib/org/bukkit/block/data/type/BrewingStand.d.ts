import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface BrewingStand extends BlockData {
    setBottle(arg0: number, arg1: boolean): void;
    getBottles(): any;
    getMaximumBottles(): number;
    hasBottle(arg0: number): boolean;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
}
export default class BrewingStand {
    static get $javaClass(): any;
}
