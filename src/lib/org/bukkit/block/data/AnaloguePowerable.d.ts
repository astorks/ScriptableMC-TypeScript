import BlockData from '../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../org/bukkit/Material.js';
export default interface AnaloguePowerable extends BlockData {
    getPower(): number;
    getMaximumPower(): number;
    setPower(arg0: number): void;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
}
export default class AnaloguePowerable {
    static get $javaClass(): any;
}
