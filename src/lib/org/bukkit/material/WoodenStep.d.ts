import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js';
import Wood from '../../../org/bukkit/material/Wood.js';
export default interface WoodenStep extends Wood {
    isInverted(): boolean;
    setInverted(inv: boolean): void;
    clone(): MaterialData;
    clone(): any;
    clone(): Wood;
    clone(): WoodenStep;
    getSpecies(): TreeSpecies;
    setSpecies(species: TreeSpecies): void;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class WoodenStep {
    static get $javaClass(): any;
    constructor(species: TreeSpecies, inv: boolean);
    constructor(type: Material, data: number);
    constructor(species: TreeSpecies);
    constructor();
}
