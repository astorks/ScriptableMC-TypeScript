import CropState from '../../../org/bukkit/CropState.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Crops extends MaterialData {
    clone(): Crops;
    clone(): any;
    clone(): MaterialData;
    getState(): CropState;
    setState(state: CropState): void;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
}
export default class Crops {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(type: Material, state: CropState);
    constructor(state: CropState);
    constructor();
    constructor(type: Material, data: number);
}
