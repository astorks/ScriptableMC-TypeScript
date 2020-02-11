import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import NetherWartsState from '../../../org/bukkit/NetherWartsState.js';
export default interface NetherWarts extends MaterialData {
    clone(): NetherWarts;
    clone(): any;
    clone(): MaterialData;
    getState(): NetherWartsState;
    setState(state: NetherWartsState): void;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class NetherWarts {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor(state: NetherWartsState);
    constructor();
}
