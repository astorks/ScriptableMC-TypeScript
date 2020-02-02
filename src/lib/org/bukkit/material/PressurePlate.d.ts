import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import PressureSensor from '../../../org/bukkit/material/PressureSensor.js';
export default interface PressurePlate extends MaterialData, PressureSensor {
    isPressed(): boolean;
    clone(): PressurePlate;
    clone(): MaterialData;
    clone(): any;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class PressurePlate {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor();
}
