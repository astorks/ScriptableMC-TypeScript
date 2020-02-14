declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import SimpleAttachableMaterialData from '../../../org/bukkit/material/SimpleAttachableMaterialData.js'

export default interface Torch extends SimpleAttachableMaterialData {
	getAttachedFace(): BlockFace;
	setFacingDirection(face: BlockFace): void;
	clone(): MaterialData;
	clone(): Torch;
	clone(): any;
	clone(): SimpleAttachableMaterialData;
	getFacing(): BlockFace;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Torch {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Torch');
	}
	constructor();
	constructor(type: Material, data: number);
	constructor(type: Material);
	constructor(...args: any[]) {
		return new Torch.$javaClass(...args);
	}
}

