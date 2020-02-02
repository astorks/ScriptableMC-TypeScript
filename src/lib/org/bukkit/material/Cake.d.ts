import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Cake extends MaterialData {
    clone(): Cake;
    clone(): MaterialData;
    clone(): any;
    getSlicesRemaining(): number;
    setSlicesEaten(n: number): void;
    setSlicesRemaining(n: number): void;
    getSlicesEaten(): number;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
}
export default class Cake {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor();
}
