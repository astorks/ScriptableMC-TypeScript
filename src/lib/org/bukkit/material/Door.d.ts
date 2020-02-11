import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../org/bukkit/material/Directional.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import Openable from '../../../org/bukkit/material/Openable.js';
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js';
export default interface Door extends MaterialData, Directional, Openable {
    clone(): Door;
    clone(): MaterialData;
    clone(): any;
    isOpen(): boolean;
    getFacing(): BlockFace;
    setFacingDirection(face: BlockFace): void;
    setOpen(isOpen: boolean): void;
    setTopHalf(isTopHalf: boolean): void;
    setHinge(isHingeRight: boolean): void;
    getHingeCorner(): BlockFace;
    getHinge(): boolean;
    isTopHalf(): boolean;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
    setData(data: number): void;
    getData(): number;
}
export default class Door {
    static get $javaClass(): any;
    constructor(type: Material, isHingeRight: boolean);
    constructor(species: TreeSpecies, face: BlockFace);
    constructor(species: TreeSpecies, face: BlockFace, isOpen: boolean);
    constructor(species: TreeSpecies, isHingeRight: boolean);
    constructor(type: Material, data: number);
    constructor();
    constructor(type: Material);
    constructor(type: Material, face: BlockFace);
    constructor(type: Material, face: BlockFace, isOpen: boolean);
    static getWoodDoorOfSpecies(species: TreeSpecies): Material;
}
