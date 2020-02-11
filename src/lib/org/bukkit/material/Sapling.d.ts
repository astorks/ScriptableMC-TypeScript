import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js';
import Wood from '../../../org/bukkit/material/Wood.js';
export default interface Sapling extends Wood {
    clone(): Sapling;
    clone(): Wood;
    clone(): any;
    clone(): MaterialData;
    setIsInstantGrowable(isInstantGrowable: boolean): void;
    isInstantGrowable(): boolean;
    getSpecies(): TreeSpecies;
    setSpecies(species: TreeSpecies): void;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class Sapling {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(type: Material, species: TreeSpecies);
    constructor(type: Material, species: TreeSpecies, isInstantGrowable: boolean);
    constructor(type: Material, data: number);
    constructor();
    constructor(species: TreeSpecies);
    constructor(species: TreeSpecies, isInstantGrowable: boolean);
}
