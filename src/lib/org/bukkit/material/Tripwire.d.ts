import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Tripwire extends MaterialData {
    isActivated(): boolean;
    setActivated(act: boolean): void;
    isObjectTriggering(): boolean;
    setObjectTriggering(trig: boolean): void;
    clone(): Tripwire;
    clone(): MaterialData;
    clone(): any;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Tripwire {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material, data: number);
}
