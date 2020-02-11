import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js';
import Wood from '../../../org/bukkit/material/Wood.js';
export default interface Tree extends Wood {
    clone(): Wood;
    clone(): Tree;
    clone(): MaterialData;
    clone(): any;
    getDirection(): BlockFace;
    setDirection(dir: BlockFace): void;
    getSpecies(): TreeSpecies;
    setSpecies(species: TreeSpecies): void;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
    setData(data: number): void;
    getData(): number;
}
export default class Tree {
    static get $javaClass(): any;
    constructor(species: TreeSpecies, dir: BlockFace);
    constructor(type: Material);
    constructor(type: Material, species: TreeSpecies);
    constructor(type: Material, data: number);
    constructor(species: TreeSpecies);
    constructor();
    constructor(type: Material, species: TreeSpecies, dir: BlockFace);
}
