import CoalType from '../../../org/bukkit/CoalType.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Coal extends MaterialData {
    clone(): Coal;
    clone(): MaterialData;
    clone(): any;
    getType(): CoalType;
    setType(type: CoalType): void;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class Coal {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor(type: CoalType);
    constructor();
}
