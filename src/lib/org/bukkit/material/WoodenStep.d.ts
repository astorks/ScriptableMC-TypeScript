import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js';
import Wood from '../../../org/bukkit/material/Wood.js';
export default interface WoodenStep extends Wood {
    clone(): Wood;
    clone(): any;
    clone(): WoodenStep;
    clone(): MaterialData;
    setInverted(inv: boolean): void;
    isInverted(): boolean;
    getSpecies(): TreeSpecies;
    setSpecies(species: TreeSpecies): void;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
}
export default class WoodenStep {
    static get $javaClass(): any;
    constructor(species: TreeSpecies, inv: boolean);
    constructor(species: TreeSpecies);
    constructor();
    constructor(type: Material, data: number);
}
