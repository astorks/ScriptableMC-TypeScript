declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import Redstone from '../../../org/bukkit/material/Redstone.js'
import SimpleAttachableMaterialData from '../../../org/bukkit/material/SimpleAttachableMaterialData.js'

export default interface TripwireHook extends SimpleAttachableMaterialData, Redstone {
	clone(): any;
	clone(): MaterialData;
	clone(): SimpleAttachableMaterialData;
	clone(): TripwireHook;
	getAttachedFace(): BlockFace;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	isActivated(): boolean;
	isConnected(): boolean;
	isPowered(): boolean;
	setActivated(act: boolean): void;
	setConnected(connected: boolean): void;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
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

