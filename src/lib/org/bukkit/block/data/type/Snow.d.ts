import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface Snow extends BlockData {
    getMinimumLayers(): number;
    getMaximumLayers(): number;
    getLayers(): number;
    setLayers(arg0: number): void;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
}
export default class Snow {
    static get $javaClass(): any;
}
