import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import Redstone from '../../../org/bukkit/material/Redstone.js';
export default interface RedstoneWire extends MaterialData, Redstone {
    clone(): any;
    clone(): RedstoneWire;
    clone(): MaterialData;
    isPowered(): boolean;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
    setData(data: number): void;
    getData(): number;
}
export default class RedstoneWire {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor();
}
