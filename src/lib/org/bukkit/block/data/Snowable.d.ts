import BlockData from '../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../org/bukkit/Material.js';
export default interface Snowable extends BlockData {
    isSnowy(): boolean;
    setSnowy(arg0: boolean): void;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
}
export default class Snowable {
    static get $javaClass(): any;
}
