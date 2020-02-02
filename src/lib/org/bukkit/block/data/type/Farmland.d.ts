import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface Farmland extends BlockData {
    setMoisture(arg0: number): void;
    getMoisture(): number;
    getMaximumMoisture(): number;
    getMaterial(): Material;
    getAsString(arg0: boolean): string;
    getAsString(): string;
    clone(): BlockData;
    clone(): any;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
}
export default class Farmland {
    static get $javaClass(): any;
}
