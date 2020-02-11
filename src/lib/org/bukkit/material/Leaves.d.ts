import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js';
import Wood from '../../../org/bukkit/material/Wood.js';
export default interface Leaves extends Wood {
    clone(): any;
    clone(): Leaves;
    clone(): Wood;
    clone(): MaterialData;
    setDecaying(isDecaying: boolean): void;
    isDecayable(): boolean;
    setDecayable(isDecayable: boolean): void;
    isDecaying(): boolean;
    getSpecies(): TreeSpecies;
    setSpecies(species: TreeSpecies): void;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class Leaves {
    static get $javaClass(): any;
    constructor(species: TreeSpecies, isDecayable: boolean);
    constructor(type: Material);
    constructor(type: Material, species: TreeSpecies);
    constructor(type: Material, data: number);
    constructor(species: TreeSpecies);
    constructor();
    constructor(type: Material, species: TreeSpecies, isDecayable: boolean);
}
