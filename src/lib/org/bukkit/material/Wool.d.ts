import Colorable from '../../../org/bukkit/material/Colorable.js';
import DyeColor from '../../../org/bukkit/DyeColor.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Wool extends MaterialData, Colorable {
    clone(): Wool;
    clone(): MaterialData;
    clone(): any;
    setColor(color: DyeColor): void;
    getColor(): DyeColor;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
}
export default class Wool {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor(color: DyeColor);
    constructor();
}
