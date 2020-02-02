import GrassSpecies from '../../../org/bukkit/GrassSpecies.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface LongGrass extends MaterialData {
    clone(): LongGrass;
    clone(): MaterialData;
    clone(): any;
    getSpecies(): GrassSpecies;
    setSpecies(species: GrassSpecies): void;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
}
export default class LongGrass {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor(species: GrassSpecies);
    constructor();
}
