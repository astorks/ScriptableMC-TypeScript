import { Material } from '../../../org/bukkit/Material.js';
import { ItemStack } from '../../../org/bukkit/inventory/ItemStack.js';
export interface MaterialData {
    clone(): any;
    clone(): MaterialData;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
}
export declare class MaterialData {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(type: Material, data: number);
}
