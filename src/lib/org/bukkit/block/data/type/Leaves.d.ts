import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface Leaves extends BlockData {
    isPersistent(): boolean;
    setPersistent(arg0: boolean): void;
    setDistance(arg0: number): void;
    getDistance(): number;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
}
export default class Leaves {
    static get $javaClass(): any;
}
