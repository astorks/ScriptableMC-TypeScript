import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Tripwire extends MaterialData {
    clone(): MaterialData;
    clone(): Tripwire;
    clone(): any;
    isActivated(): boolean;
    isObjectTriggering(): boolean;
    setActivated(act: boolean): void;
    setObjectTriggering(trig: boolean): void;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
}
export default class Tripwire {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material, data: number);
}
