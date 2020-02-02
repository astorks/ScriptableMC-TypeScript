import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface Snow extends BlockData {
    getLayers(): number;
    getMinimumLayers(): number;
    setLayers(arg0: number): void;
    getMaximumLayers(): number;
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
