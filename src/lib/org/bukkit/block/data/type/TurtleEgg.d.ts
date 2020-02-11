import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface TurtleEgg extends BlockData {
    setEggs(arg0: number): void;
    getEggs(): number;
    getHatch(): number;
    getMaximumHatch(): number;
    getMaximumEggs(): number;
    setHatch(arg0: number): void;
    getMinimumEggs(): number;
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
