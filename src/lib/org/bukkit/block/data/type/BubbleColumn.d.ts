import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface BubbleColumn extends BlockData {
    setDrag(arg0: boolean): void;
    isDrag(): boolean;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
}
export default class BubbleColumn {
    static get $javaClass(): any;
}
