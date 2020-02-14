declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import DirectionalContainer from '../../../org/bukkit/material/DirectionalContainer.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface FurnaceAndDispenser extends DirectionalContainer {
	clone(): any;
	clone(): MaterialData;
	clone(): DirectionalContainer;
	clone(): FurnaceAndDispenser;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class FurnaceAndDispenser {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.FurnaceAndDispenser');
	}

	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new FurnaceAndDispenser.$javaClass(...args);
	}

}

