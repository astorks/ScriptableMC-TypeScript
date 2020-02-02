import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js';
export default interface Wood extends MaterialData {
    clone(): Wood;
    clone(): any;
    clone(): MaterialData;
    getSpecies(): TreeSpecies;
    setSpecies(species: TreeSpecies): void;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
}
export default class Wood {
    static get $javaClass(): any;
    constructor(type: Material, species: TreeSpecies);
    constructor(type: Material);
    constructor(species: TreeSpecies);
    constructor();
    constructor(type: Material, data: number);
}