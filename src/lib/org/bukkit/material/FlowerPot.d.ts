import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface FlowerPot extends MaterialData {
    setContents(materialData: MaterialData): void;
    getContents(): MaterialData;
    clone(): any;
    clone(): MaterialData;
    clone(): FlowerPot;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class FlowerPot {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material, data: number);
    constructor(type: Material);
}
