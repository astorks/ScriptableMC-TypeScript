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
    setConnected(connected: boolean): void;
    isConnected(): boolean;
    setActivated(act: boolean): void;
    isActivated(): boolean;
    isPowered(): boolean;
    setFacingDirection(face: BlockFace): void;
    getAttachedFace(): BlockFace;
    getFacing(): BlockFace;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class TripwireHook {
    static get $javaClass(): any;
    constructor(dir: BlockFace);
    constructor(type: Material, data: number);
    constructor();
}
