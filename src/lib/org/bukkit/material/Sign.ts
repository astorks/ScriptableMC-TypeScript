declare var Java: any;
import Attachable from '../../../org/bukkit/material/Attachable.js'
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface Sign extends MaterialData, Attachable {
	isWallSign(): boolean;
	getFacing(): BlockFace;
	getAttachedFace(): BlockFace;
	setFacingDirection(face: BlockFace): void;
	clone(): any;
	clone(): Sign;
	clone(): MaterialData;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Sign {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Sign');
	}
	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Sign.$javaClass(...args);
	}
}

