import { Material } from '../../../org/bukkit/Material.js';
import { ItemStack } from '../../../org/bukkit/inventory/ItemStack.js';
export interface MaterialData {
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
    clone(): any;
    clone(): MaterialData;
}
export declare class MaterialData {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(type: Material, data: number);
}
