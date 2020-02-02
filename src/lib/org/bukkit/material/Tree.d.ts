import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js';
import Wood from '../../../org/bukkit/material/Wood.js';
export default interface Tree extends Wood {
    clone(): Tree;
    clone(): any;
    clone(): Wood;
    clone(): MaterialData;
    setDirection(dir: BlockFace): void;
    getDirection(): BlockFace;
    getSpecies(): TreeSpecies;
    setSpecies(species: TreeSpecies): void;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
}
export default class Tree {
    static get $javaClass(): any;
    constructor(species: TreeSpecies, dir: BlockFace);
    constructor(type: Material);
    constructor(type: Material, species: TreeSpecies);
    constructor(type: Material, species: TreeSpecies, dir: BlockFace);
    constructor(type: Material, data: number);
    constructor();
    constructor(species: TreeSpecies);
}
