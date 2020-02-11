import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Cauldron extends MaterialData {
    clone(): Cauldron;
    clone(): MaterialData;
    clone(): any;
    isEmpty(): boolean;
    isFull(): boolean;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
    setData(data: number): void;
    getData(): number;
}
export default class Cauldron {
    static get $javaClass(): any;
    constructor(data: number);
    constructor(type: Material, data: number);
    constructor();
}
