import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Cauldron extends MaterialData {
    clone(): Cauldron;
    clone(): MaterialData;
    clone(): any;
    isEmpty(): boolean;
    isFull(): boolean;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
}
export default class Cauldron {
    static get $javaClass(): any;
    constructor(data: number);
    constructor(type: Material, data: number);
    constructor();
}
