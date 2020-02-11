import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Tripwire extends MaterialData {
    clone(): MaterialData;
    clone(): Tripwire;
    clone(): any;
    setObjectTriggering(trig: boolean): void;
    setActivated(act: boolean): void;
    isActivated(): boolean;
    isObjectTriggering(): boolean;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class Tripwire {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material, data: number);
}
