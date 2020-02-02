import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface TurtleEgg extends BlockData {
    getMinimumEggs(): number;
    getMaximumHatch(): number;
    setHatch(arg0: number): void;
    getHatch(): number;
    setEggs(arg0: number): void;
    getEggs(): number;
    getMaximumEggs(): number;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
}
export default class TurtleEgg {
    static get $javaClass(): any;
}
