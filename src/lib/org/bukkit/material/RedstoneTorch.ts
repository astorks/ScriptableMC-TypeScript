declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Redstone from './Redstone.js'
import SimpleAttachableMaterialData from './SimpleAttachableMaterialData.js'
import Torch from './Torch.js'

export default interface RedstoneTorch extends Torch, Redstone {
	clone(): SimpleAttachableMaterialData;
	clone(): MaterialData;
	clone(): any;
	clone(): Torch;
	clone(): RedstoneTorch;
	getAttachedFace(): BlockFace;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	isPowered(): boolean;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class RedstoneTorch {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.RedstoneTorch');
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new RedstoneTorch.$javaClass(...args);
	}

}

