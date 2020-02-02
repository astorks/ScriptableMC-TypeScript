import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface BrewingStand extends BlockData {
    setBottle(arg0: number, arg1: boolean): void;
    getBottles(): any;
    hasBottle(arg0: number): boolean;
    getMaximumBottles(): number;
    getMaterial(): Material;
    getAsString(arg0: boolean): string;
    getAsString(): string;
    clone(): BlockData;
    clone(): any;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
}
export default class BrewingStand {
    static get $javaClass(): any;
}
