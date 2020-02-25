declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../org/bukkit/material/Directional.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface Stairs extends MaterialData, Directional {
	clone(): any;
	clone(): MaterialData;
	clone(): Stairs;
	getAscendingDirection(): BlockFace;
	getData(): number;
	getDescendingDirection(): BlockFace;
	getFacing(): BlockFace;
	getItemType(): Material;
	isInverted(): boolean;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	setInverted(inv: boolean): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Stairs {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Stairs');
	}

	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Stairs.$javaClass(...args);
	}

}

