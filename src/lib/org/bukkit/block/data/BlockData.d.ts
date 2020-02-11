import Material from '../../../../org/bukkit/Material.js';
export default interface BlockData {
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
}
export default class BlockData {
    static get $javaClass(): any;
}
