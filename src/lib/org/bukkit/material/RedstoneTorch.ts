declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import Redstone from '../../../org/bukkit/material/Redstone.js'
import SimpleAttachableMaterialData from '../../../org/bukkit/material/SimpleAttachableMaterialData.js'
import Torch from '../../../org/bukkit/material/Torch.js'

export default interface RedstoneTorch extends Torch, Redstone {
	isPowered(): boolean;
	clone(): SimpleAttachableMaterialData;
	clone(): MaterialData;
	clone(): any;
	clone(): Torch;
	clone(): RedstoneTorch;
	getAttachedFace(): BlockFace;
	setFacingDirection(face: BlockFace): void;
	getFacing(): BlockFace;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class RedstoneTorch {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.RedstoneTorch');
	}
	constructor(type: Material, data: number);
	constructor(type: Material);
	constructor();
	constructor(...args: any[]) {
		return new RedstoneTorch.$javaClass(...args);
	}
}

