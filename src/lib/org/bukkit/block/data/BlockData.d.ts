import { Material } from '../../../../org/bukkit/Material.js';
export interface BlockData {
    getMaterial(): Material;
    getAsString(arg0: boolean): string;
    getAsString(): string;
    clone(): BlockData;
    clone(): any;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
}
export declare class BlockData {
    static get $javaClass(): any;
}
