import Axis from '../../../../org/bukkit/Axis.js';
import BlockData from '../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../org/bukkit/Material.js';
export default interface Orientable extends BlockData {
    setAxis(arg0: Axis): void;
    getAxes(): any;
    getAxis(): Axis;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
}
export default class Orientable {
    static get $javaClass(): any;
}
