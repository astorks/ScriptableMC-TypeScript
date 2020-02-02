import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface TurtleEgg extends BlockData {
    getMaximumEggs(): number;
    getHatch(): number;
    setHatch(arg0: number): void;
    getMaximumHatch(): number;
    setEggs(arg0: number): void;
    getEggs(): number;
    getMinimumEggs(): number;
    getMaterial(): Material;
    getAsString(arg0: boolean): string;
    getAsString(): string;
    clone(): BlockData;
    clone(): any;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
}
export default class TurtleEgg {
    static get $javaClass(): any;
}
