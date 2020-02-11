import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import SandstoneType from '../../../org/bukkit/SandstoneType.js';
export default interface Sandstone extends MaterialData {
    clone(): Sandstone;
    clone(): MaterialData;
    clone(): any;
    getType(): SandstoneType;
    setType(type: SandstoneType): void;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
    setData(data: number): void;
    getData(): number;
}
export default class Sandstone {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor(type: SandstoneType);
    constructor();
}
