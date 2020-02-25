declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import DirectionalContainer from '../../../org/bukkit/material/DirectionalContainer.js'
import FurnaceAndDispenser from '../../../org/bukkit/material/FurnaceAndDispenser.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface Dispenser extends FurnaceAndDispenser {
	clone(): MaterialData;
	clone(): any;
	clone(): DirectionalContainer;
	clone(): FurnaceAndDispenser;
	clone(): Dispenser;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Dispenser {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Dispenser');
	}

	constructor();
	constructor(type: Material);
	constructor(direction: BlockFace);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Dispenser.$javaClass(...args);
	}

}

