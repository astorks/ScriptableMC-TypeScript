declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import DirectionalContainer from '../../../org/bukkit/material/DirectionalContainer.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface EnderChest extends DirectionalContainer {
	clone(): any;
	clone(): MaterialData;
	clone(): DirectionalContainer;
	clone(): EnderChest;
	getFacing(): BlockFace;
	setFacingDirection(face: BlockFace): void;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class EnderChest {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.EnderChest');
	}
	constructor(type: Material, data: number);
	constructor(type: Material);
	constructor(direction: BlockFace);
	constructor();
	constructor(...args: any[]) {
		return new EnderChest.$javaClass(...args);
	}
}

