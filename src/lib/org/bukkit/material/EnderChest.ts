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
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class EnderChest {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.EnderChest');
	}

	constructor();
	constructor(type: Material);
	constructor(direction: BlockFace);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new EnderChest.$javaClass(...args);
	}

}

