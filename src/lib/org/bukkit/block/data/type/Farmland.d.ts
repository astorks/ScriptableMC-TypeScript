import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface Farmland extends BlockData {
    setMoisture(arg0: number): void;
    getMoisture(): number;
    getMaximumMoisture(): number;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
}
export default class Farmland {
    static get $javaClass(): any;
}
