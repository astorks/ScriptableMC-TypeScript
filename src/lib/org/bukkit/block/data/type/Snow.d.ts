import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface Snow extends BlockData {
    getMaximumLayers(): number;
    getMinimumLayers(): number;
    getLayers(): number;
    setLayers(arg0: number): void;
    getMaterial(): Material;
    getAsString(arg0: boolean): string;
    getAsString(): string;
    clone(): BlockData;
    clone(): any;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
}
export default class Snow {
    static get $javaClass(): any;
}
