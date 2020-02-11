import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Cake extends MaterialData {
    clone(): Cake;
    clone(): MaterialData;
    clone(): any;
    setSlicesRemaining(n: number): void;
    getSlicesEaten(): number;
    setSlicesEaten(n: number): void;
    getSlicesRemaining(): number;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class Cake {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor();
}
