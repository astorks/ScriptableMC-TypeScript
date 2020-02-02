import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js';
export default interface Wood extends MaterialData {
    getSpecies(): TreeSpecies;
    setSpecies(species: TreeSpecies): void;
    clone(): Wood;
    clone(): MaterialData;
    clone(): any;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Wood {
    static get $javaClass(): any;
    constructor();
    constructor(species: TreeSpecies);
    constructor(type: Material);
    constructor(type: Material, species: TreeSpecies);
    constructor(type: Material, data: number);
}
