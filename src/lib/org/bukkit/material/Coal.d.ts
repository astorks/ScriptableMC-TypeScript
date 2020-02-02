import CoalType from '../../../org/bukkit/CoalType.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Coal extends MaterialData {
    setType(type: CoalType): void;
    clone(): any;
    clone(): Coal;
    clone(): MaterialData;
    getType(): CoalType;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Coal {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor(type: CoalType);
}
