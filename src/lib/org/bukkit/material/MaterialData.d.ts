import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
export default interface MaterialData {
    clone(): any;
    clone(): MaterialData;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class MaterialData {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(type: Material, data: number);
}
