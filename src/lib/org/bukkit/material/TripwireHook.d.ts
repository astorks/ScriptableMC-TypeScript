import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import Redstone from '../../../org/bukkit/material/Redstone.js';
import SimpleAttachableMaterialData from '../../../org/bukkit/material/SimpleAttachableMaterialData.js';
export default interface TripwireHook extends SimpleAttachableMaterialData, Redstone {
    clone(): SimpleAttachableMaterialData;
    clone(): TripwireHook;
    clone(): any;
    clone(): MaterialData;
    isActivated(): boolean;
    setActivated(act: boolean): void;
    isConnected(): boolean;
    setConnected(connected: boolean): void;
    setFacingDirection(face: BlockFace): void;
    getAttachedFace(): BlockFace;
    isPowered(): boolean;
    getFacing(): BlockFace;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
}
export default class TripwireHook {
    static get $javaClass(): any;
    constructor(dir: BlockFace);
    constructor(type: Material, data: number);
    constructor();
}
