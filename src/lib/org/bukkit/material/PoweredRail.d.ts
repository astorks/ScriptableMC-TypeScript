import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ExtendedRails from '../../../org/bukkit/material/ExtendedRails.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import Rails from '../../../org/bukkit/material/Rails.js';
import Redstone from '../../../org/bukkit/material/Redstone.js';
export default interface PoweredRail extends ExtendedRails, Redstone {
    clone(): ExtendedRails;
    clone(): any;
    clone(): MaterialData;
    clone(): Rails;
    clone(): PoweredRail;
    setPowered(isPowered: boolean): void;
    isPowered(): boolean;
    setDirection(face: BlockFace, isOnSlope: boolean): void;
    isCurve(): boolean;
    getDirection(): BlockFace;
    isOnSlope(): boolean;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class PoweredRail {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor();
}
