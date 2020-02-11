import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Tripwire extends MaterialData {
    clone(): MaterialData;
    clone(): Tripwire;
    clone(): any;
    isObjectTriggering(): boolean;
    setActivated(act: boolean): void;
    isActivated(): boolean;
    setObjectTriggering(trig: boolean): void;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
    setData(data: number): void;
    getData(): number;
}
export default class Tripwire {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material, data: number);
}
