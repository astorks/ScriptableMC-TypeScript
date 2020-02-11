import BlockData from '../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../org/bukkit/Material.js';
import Rail$Shape from '../../../../org/bukkit/block/data/Rail$Shape.js';
export default interface Rail extends BlockData {
    getShape(): Rail$Shape;
    setShape(arg0: Rail$Shape): void;
    getShapes(): any;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
}
export default class Rail {
    static get $javaClass(): any;
}
