import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../org/bukkit/material/Directional.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import Redstone from '../../../org/bukkit/material/Redstone.js';
export default interface PistonBaseMaterial extends MaterialData, Directional, Redstone {
    getFacing(): BlockFace;
    setFacingDirection(face: BlockFace): void;
    isSticky(): boolean;
    isPowered(): boolean;
    setPowered(powered: boolean): void;
    clone(): MaterialData;
    clone(): any;
    clone(): PistonBaseMaterial;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class PistonBaseMaterial {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(type: Material, data: number);
}
