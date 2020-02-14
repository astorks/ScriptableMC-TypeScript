declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import Redstone from '../../../org/bukkit/material/Redstone.js'
import SimpleAttachableMaterialData from '../../../org/bukkit/material/SimpleAttachableMaterialData.js'

export default interface TripwireHook extends SimpleAttachableMaterialData, Redstone {
	getAttachedFace(): BlockFace;
	setFacingDirection(face: BlockFace): void;
	isPowered(): boolean;
	setActivated(act: boolean): void;
	isActivated(): boolean;
	setConnected(connected: boolean): void;
	isConnected(): boolean;
	clone(): MaterialData;
	clone(): TripwireHook;
	clone(): any;
	clone(): SimpleAttachableMaterialData;
	getFacing(): BlockFace;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class TripwireHook {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.TripwireHook');
	}
	constructor();
	constructor(dir: BlockFace);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new TripwireHook.$javaClass(...args);
	}
}

