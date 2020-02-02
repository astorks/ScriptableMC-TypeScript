import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js';
import Wood from '../../../org/bukkit/material/Wood.js';
export default interface Tree extends Wood {
    getDirection(): BlockFace;
    setDirection(dir: BlockFace): void;
    clone(): Tree;
    clone(): MaterialData;
    clone(): any;
    clone(): Wood;
    getSpecies(): TreeSpecies;
    setSpecies(species: TreeSpecies): void;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Tree {
    static get $javaClass(): any;
    constructor(type: Material, species: TreeSpecies, dir: BlockFace);
    constructor(type: Material, data: number);
    constructor(species: TreeSpecies);
    constructor();
    constructor(species: TreeSpecies, dir: BlockFace);
    constructor(type: Material);
    constructor(type: Material, species: TreeSpecies);
}
